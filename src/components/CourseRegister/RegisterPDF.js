import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { handleGetPrograms } from '@/services/programsService';
import { handleGetSchools } from '@/services/schoolService';
// import { handleGetSubjectByProgram } from '@/services/subjectsService';
import { handleGetRegistrationDetails } from '@/services/registrationDetailsService';
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import * as Yup from 'yup';
import { phoneRegExp, grades } from '@/libs/common';
import { handleRegistrationPDF } from '@/services/registrationService';
import { hashGrades } from '@/libs/grades';
import RegistrationSuccess from './RegistrationSuccess';
import Loading from './Loading';
import { get } from 'lodash';
import { useRouter } from 'next/router';
const btnClass =
  'rounded-3xl py-3 px-6 font-extrabold mt-12 hover:bg-[#0C134F]';

export default function RegisterPDF({ activeStep, handleNext, handleBack }) {
  const [programs, setPrograms] = useState([]);

  const [schools, setSchools] = useState([]);

  const [elements, setElements] = useState([]);

  const [key, setKey] = useState('subjectIds');

  const [currentProgramId, setCurrentProgramId] = useState(null);

  const [open, setOpen] = useState(false);

  const router = useRouter();
  const handleSetDefaultPrograms = (router) => {
    const tab = router.asPath;
    switch (tab) {
      case '/khoa-hoc/chuong-trinh-pho-thong':
        setCurrentProgramId(1);
        break;
      case '/khoa-hoc/chuong-trinh-cambridge':
        setCurrentProgramId(2);
        break;
      case '/khoa-hoc/chung-chi-cambridge':
        setCurrentProgramId(3);
        break;
      case '/khoa-hoc/luyen-thi-dau-vao':
        setCurrentProgramId(4);
        break;
      default:
        setCurrentProgramId(null);
        break;
    }
  };
  useEffect(() => {
    handleFetchData();
    handleSetDefaultPrograms(router);
  }, []);

  useEffect(() => {
    handleFetchSubjectByProgram(currentProgramId);
  }, [currentProgramId]);

  const handleRenderSubjectByProgram = (id, setFieldValue) => {
    setCurrentProgramId(id);
    setFieldValue('subjects', []);
  };

  const handleFetchData = async () => {
    let [programList, schoolList] = await Promise.all([
      handleGetPrograms(),
      handleGetSchools(),
    ]);
    setPrograms(get(programList, 'elements', []));
    setSchools(get(schoolList, 'elements', []));
  };

  const initialValues = {
    programId: currentProgramId,
    subjects: [],
    gradeId: null,
    nameP: '',
    emailP: '',
    phoneNoP: '',
    ageStudent: null,
    schoolId: null,
    certificateId: null,
    tutoringAddress: '',
  };

  const handleFetchSubjectByProgram = async (programId) => {
    if (programId) {
      const { elements, key } = await handleGetRegistrationDetails(programId);
      setElements(elements);
      setKey(key);
    } else {
      return;
    }
  };

  const handleRenderButton = (values) => {
    let isValid = false;

    if (key === 'subjectIds') {
      isValid = values.programId && values.subjects.length && values.gradeId;
    } else {
      isValid = values.programId && values.ageStudent && values[key];
    }

    return (
      <Button
        className={` ${btnClass} ${
          activeStep == 0 && isValid
            ? 'ca-primary-bg-color text-white'
            : 'pointer-events-none cursor-not-allowed bg-gray-300 text-gray-100'
        }`}
        onClick={handleNext}
      >
        Tiếp theo
      </Button>
    );
  };

  const handleSubmitForm = async (values) => {
    const {
      ageStudent,
      certificateId,
      emailP,
      gradeId,
      nameP,
      programId,
      schoolId,
      phoneNoP,
      subjects,
      tutoringAddress,
    } = values;

    let data = {
      emailP,
      nameP,
      phoneNoP,
      subjectIds: subjects.join(','),
      ageStudent: ageStudent ? Number.parseInt(ageStudent, 10) : null,
      certificateId: certificateId ? Number.parseInt(certificateId, 10) : null,
      gradeId: gradeId ? Number.parseInt(gradeId, 10) : null,
      programId: programId ? Number.parseInt(programId, 10) : null,
      schoolId: schoolId ? Number.parseInt(schoolId, 10) : null,
      tutoringAddress,
    };

    setOpen(true);

    handleRegistrationPDF(data)
      .then((res) => {
        if (res.message == 'success') {
          handleNext();
        } else {
          alert(res.message);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setOpen(false);
      });
  };

  const renderValidatationSchema = () => {
    let validation = {
      programId: Yup.string().required('Vui lòng chọn chương trình học'),
      nameP: Yup.string('Vui lòng nhập tên').required('Vui lòng nhập tên'),
      emailP: Yup.string('Vui lòng nhập email')
        .email('Email không hợp lệ')
        .required('Vui lòng nhập email'),
      phoneNoP: Yup.string()
        .matches(phoneRegExp, 'Số điện thoại không hợp lệ')
        .required('Vui lòng nhập số điện thoại'),
    };

    if (key === 'subjectIds') {
      validation = {
        ...validation,
        subjects: Yup.array().min(1, 'Vui lòng chọn ít nhất một môn học'),
        gradeId: Yup.string().required('Vui lòng chọn lớp học'),
      };
    }

    if (key === 'schoolId') {
      validation = {
        ...validation,
        schoolId: Yup.string().required(
          1,
          'Vui lòng chọn ít nhất một trường học'
        ),
        // ageStudent: Yup.string().required('Vui lòng chọn lớp học'),
      };
    }

    if (key === 'certificateId') {
      validation = {
        ...validation,
        certificateId: Yup.string().required(
          1,
          'Vui lòng chọn ít nhất một chứng chỉ'
        ),
        // ageStudent: Yup.string().required('Vui lòng chọn lớp học'),
      };
    }

    return Yup.object().shape({
      ...validation,
    });
  };

  return (
    <>
      <Loading open={open} />
      <Formik
        className="w-full"
        initialValues={initialValues}
        enableReinitialize
        validationSchema={() => renderValidatationSchema()}
        onSubmit={async (values) => {
          handleSubmitForm(values);
        }}
      >
        {({ values, errors, touched, setFieldValue, isValid }) => (
          <Form>
            <Box>
              {activeStep == 0 ? (
                <Box className="flex flex-col gap-8">
                  <Box className="flex flex-col gap-8">
                    <Typography className="font-extrabold text-lg" variant="h6">
                      Chọn chương trình:
                    </Typography>
                    <Box>
                      <Field name="programId">
                        {({ field }) => (
                          <RadioGroup
                            name={field.name}
                            value={field.value}
                            onChange={(e) => {
                              field.onChange(e);
                              handleRenderSubjectByProgram(
                                e.target.value,
                                setFieldValue
                              );
                            }}
                            className="flex flex-col justify-start md:flex-row md:justify-around"
                          >
                            {programs.map((program) => (
                              <FormControlLabel
                                key={program.id}
                                id={program.nameVn}
                                value={program.id}
                                control={
                                  <Radio
                                    sx={{
                                      '&.Mui-checked': {
                                        color: '#0C134F',
                                      },
                                    }}
                                  />
                                }
                                label={program.nameVn}
                              />
                            ))}
                          </RadioGroup>
                        )}
                      </Field>
                      <ErrorMessage
                        component="div"
                        className="text-red-500"
                        name="programId"
                      />
                    </Box>
                    <Box>
                      {key === 'subjectIds' && (
                        <Typography
                          className="font-extrabold text-lg"
                          variant="h6"
                        >
                          Chọn môn học:
                        </Typography>
                      )}
                      <Box className="flex flex-col justify-center">
                        {key === 'subjectIds' && (
                          <>
                            <Box className="flex flex-col justify-start md:flex-row md:justify-around">
                              {elements.map((item) => {
                                return (
                                  <FormControlLabel
                                    key={`${key}_${item.id}`}
                                    className="flex whitespace-nowrap"
                                    control={
                                      <Field
                                        type="checkbox"
                                        name="subjects"
                                        value={String(item.id)}
                                        sx={{
                                          '&.Mui-checked': {
                                            color: '#0C134F',
                                          },
                                        }}
                                        as={Checkbox}
                                      />
                                    }
                                    label={item.nameVn}
                                  />
                                );
                              })}
                            </Box>
                            <ErrorMessage
                              component="div"
                              className="text-red-500"
                              name="subjects"
                            />
                          </>
                        )}
                        {key === 'certificateId' && (
                          <>
                            <Box className="flex flex-col justify-start gap-2 md:flex-row md:items-center md:gap-8">
                              <Field name={`${key}`}>
                                {({ field, form }) => (
                                  <>
                                    <Typography
                                      variant="h6"
                                      className="whitespace-nowrap text-lg font-extrabold"
                                    >
                                      Chọn Chứng Chỉ:
                                    </Typography>
                                    <FormControl name="certificates" fullWidth>
                                      <Select
                                        {...field}
                                        labelId="certificateId"
                                        id="certificateId"
                                        name="certificateId"
                                        className="w-full md:w-[150px] h-8 border"
                                        error={
                                          form.errors.program &&
                                          form.touched.program
                                        }
                                      >
                                        {elements.map((item) => (
                                          <MenuItem
                                            key={`${key}_${item.id}`}
                                            value={item.id}
                                          >
                                            {item.code ?? item.shortCode}
                                          </MenuItem>
                                        ))}
                                      </Select>
                                    </FormControl>
                                  </>
                                )}
                              </Field>
                              <ErrorMessage
                                name="certificateId"
                                className="text-red-500"
                                component="div"
                              />
                            </Box>
                          </>
                        )}
                      </Box>
                    </Box>
                  </Box>

                  {/* Chọn Lớp Học */}
                  {key === 'subjectIds' && (
                    <>
                      <Box className="flex flex-col justify-start gap-2 md:flex-row md:items-center md:gap-8">
                        <Field name="gradeId">
                          {({ field, form }) => (
                            <>
                              <Typography
                                variant="h6"
                                className="whitespace-nowrap text-lg font-extrabold"
                              >
                                Chọn lớp học:
                              </Typography>
                              <FormControl name="ok" fullWidth>
                                <Select
                                  {...field}
                                  labelId="grade"
                                  id="gradeId"
                                  name="gradeId"
                                  className="w-full md:w-[150px] h-8 border"
                                  error={
                                    form.errors.program && form.touched.program
                                  }
                                >
                                  {grades.map((grade) => (
                                    <MenuItem key={grade.id} value={grade.id}>
                                      {hashGrades(grade.id)}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </>
                          )}
                        </Field>
                        <ErrorMessage
                          name="gradeId"
                          className="text-red-500"
                          component="div"
                        />
                      </Box>
                    </>
                  )}
                  {/* Kết Thúc Chọn Lớp Học */}

                  {/* {Tuổi Học Sinh} */}

                  {key != 'subjectIds' && (
                    <>
                      <Box className="flex flex-col justify-start gap-2 md:flex-row md:items-center md:gap-8">
                        <Typography
                          variant="h6"
                          className="whitespace-nowrap text-lg font-extrabold"
                        >
                          Độ tuổi của học viên:{' '}
                        </Typography>

                        <Field name="ageStudent">
                          {({ field, form }) => (
                            <TextField
                              {...field}
                              type="number"
                              inputProps={{
                                style: {
                                  color: '#0c134f',
                                  padding: '3px 0px 3px 5px',
                                },
                              }}
                            />
                          )}
                        </Field>

                        <ErrorMessage
                          name="ageStudent"
                          className="text-red-500"
                          component="div"
                        />
                      </Box>
                    </>
                  )}

                  <Box className="flex flex-col justify-start gap-2 md:flex-row md:items-center md:gap-8">
                    <Field name="schooId">
                      {({ field, form }) => (
                        <>
                          <Typography
                            variant="h6"
                            className="whitespace-nowrap text-lg font-extrabold"
                          >
                            Có nguyện vọng thi đầu vào Trường:
                          </Typography>
                          <FormControl name="schools" fullWidth>
                            <Select
                              {...field}
                              labelId="grade"
                              id="schoolId"
                              name="schoolId"
                              className="w-full md:w-[220px] h-8 border"
                              error={
                                form.errors.program && form.touched.program
                              }
                            >
                              {schools.map((school) => (
                                <MenuItem key={school.id} value={school.id}>
                                  {school.code}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </>
                      )}
                    </Field>
                    <ErrorMessage
                      name="schoolId"
                      className="text-red-500"
                      component="div"
                    />
                  </Box>
                </Box>
              ) : (
                ''
              )}
              {activeStep == 1 ? (
                <Box
                  className={`flex flex-col ${activeStep == 1 ? '' : 'hidden'}`}
                >
                  <Typography className="font-extrabold text-lg" variant="h6">
                    Thông tin liên hệ
                  </Typography>
                  <Typography className="my-2">Vui lòng nhập tên</Typography>
                  <Field name="nameP">
                    {({ field, form }) => (
                      <TextField
                        {...field}
                        label="Họ và tên"
                        variant="outlined"
                      />
                    )}
                  </Field>
                  {touched.nameP && errors.nameP && (
                    <ErrorMessage
                      name="nameP"
                      className="text-red-500"
                      component="div"
                    />
                  )}

                  <Typography className="my-2">Vui lòng nhập email</Typography>
                  <Field name="emailP">
                    {({ field, form }) => (
                      <TextField
                        {...field}
                        label="ca@gmail.com"
                        variant="outlined"
                      />
                    )}
                  </Field>
                  <ErrorMessage
                    name="emailP"
                    className="text-red-500"
                    component="div"
                  />

                  <Typography className="my-2">Vui lòng nhập SDT</Typography>
                  <Field name="phoneNoP">
                    {({ field, form }) => (
                      <TextField
                        {...field}
                        label="Số điện thoại"
                        variant="outlined"
                        inputProps={{
                          style: {
                            color: '#0c134f',
                            outline: '1px solid #0c134f!important',
                          },
                        }}
                      />
                    )}
                  </Field>
                  <ErrorMessage
                    name="phoneNoP"
                    className="text-red-500"
                    component="div"
                  />

                  <Typography className="my-2">
                    Vui lòng nhập địa chỉ nếu có nhu cầu học tại nhà
                  </Typography>
                  <Field name="tutoringAddress">
                    {({ field, form }) => (
                      <TextField
                        {...field}
                        label="Địa chỉ học tại nhà"
                        variant="outlined"
                        inputProps={{
                          style: {
                            color: '#0c134f',
                            outline: '1px solid #0c134f!important',
                          },
                        }}
                      />
                    )}
                  </Field>
                </Box>
              ) : (
                ''
              )}
              {activeStep >= 2 ? <RegistrationSuccess /> : ''}
            </Box>
            <Box className="flex justify-center">
              {/* {activeStep != 0 && activeStep != 2 ? (
                <Button onClick={handleBack} color="inherit">
                  Trở lại
                </Button>
              ) : (
                ''
              )} */}
              {activeStep == 0 ? <>{handleRenderButton(values)}</> : ''}
              {activeStep == 1 ? (
                <Button
                  type="submit"
                  className={`${btnClass} ${
                    isValid
                      ? 'ca-primary-bg-color text-white '
                      : 'pointer-events-none cursor-not-allowed bg-gray-300 text-gray-100'
                  }`}
                >
                  Đăng ký
                </Button>
              ) : (
                ''
              )}
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
}
