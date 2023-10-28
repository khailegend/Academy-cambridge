import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import {
  Box, Checkbox, FormControl, FormControlLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography,
} from '@mui/material';
import * as Yup from 'yup';
import {phoneRegExp, grades} from '@/libs/common';
import {hashGrades} from '@/libs/grades';
import RegistrationSuccess from './RegistrationSuccess';
import Loading from './Loading';
import {useRouter} from 'next/router';
import ReCAPTCHA from 'react-google-recaptcha'


import {certificates, commonSubjects, foreignAndCambridgeSubjects, programs, schools} from "@/constant";
import CircularProgress from "@mui/material/CircularProgress";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const btnClass = 'rounded-3xl py-3 px-6 font-extrabold mt-12 hover:bg-[#0C134F]';

export default function RegisterPDF({activeStep, handleNext, handleBack}) {
  const [currentProgramId, setCurrentProgramId] = useState(null);

  const [open, setOpen] = useState(false);
  const recaptchaRef = React.createRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();
  const handleSetDefaultPrograms = (router) => {
    const tab = router.asPath;
    switch (tab) {
      case '/khoa-hoc/chuong-trinh-cambridge':
        setCurrentProgramId(1);
        break;

      case '/khoa-hoc/luyen-thi-dau-vao':
        setCurrentProgramId(2);
        break;

      case '/khoa-hoc/chuong-trinh-pho-thong':
        setCurrentProgramId(3);
        break;

      case '/khoa-hoc/chung-chi-cambridge':
        setCurrentProgramId(4);
        break;

      default:
        setCurrentProgramId(1);
        break;
    }
  };
  useEffect(() => {
    handleSetDefaultPrograms(router);
  }, []);

  const handleRenderSubjectByProgram = (id, setFieldValue) => {
    setCurrentProgramId(id);
    setFieldValue('subjects', []);
  };

  const initialValues = {
    programId: currentProgramId,
    subjects: [],
    gradeId: null,
    name: '',
    email: '',
    phone: '',
    age: null,
    schoolId: null,
    certificateId: null,
    tutoringAddress: ''
  };

  const handleRenderButton = (values) => {

    let isValid = false;
    switch (parseInt(values.programId)) {
      case 1: {
        isValid = values.subjects?.length > 0 && values.gradeId;

        break;
      }

      case 2: {
        isValid = values.subjects?.length > 0 && values.gradeId;

        break;
      }

      case 3: {
        isValid = values.subjects?.length > 0 && values.gradeId;

        break;
      }

      case 4: {
        isValid = !!values.age;

        break;
      }

      default:
        break;
    }

    return (<Button
      className={` ${btnClass} ${activeStep === 0 && isValid ? 'ca-primary-bg-color text-white' : 'pointer-events-none cursor-not-allowed bg-gray-300 text-gray-100'}`}
      onClick={handleNext}
    >
      Tiếp theo
    </Button>);
  };

  const handleSubmitForm = async (values, resetForm) => {
    setIsSubmitting(true);

    const {
      age, certificateId, email, gradeId, name, programId, schoolId, phone, subjects, tutoringAddress,
    } = values;

    let data = {
      email,
      name,
      phone,
      subjectIds: subjects.join(','),
      age: age ? Number.parseInt(age, 10) : null,
      certificateId: certificateId ? Number.parseInt(certificateId, 10) : null,
      gradeId: gradeId ? Number.parseInt(gradeId, 10) : null,
      programId: programId ? Number.parseInt(programId, 10) : null,
      schoolId: schoolId ? Number.parseInt(schoolId, 10) : null,
      tutoringAddress,
    };

    const token = await recaptchaRef.current.executeAsync();

    console.log('reCAPTCHA token', token);

    if (!token) {
      alert('Rất tiếc Google reCAPTCHA không thể xác minh được danh tính của bạn. Vui lòng liên hệ admin để được hỗ trợ!');

      setIsSubmitting(false);
      return;
    } else {
      console.log('Google reCAPTCHA xác minh thành công');
    }

    setOpen(true);

    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        name,
        email,
        subject: 'Trường Bồi Dưỡng Ngoại Ngữ Cambridge Academy Gửi Phụ Huynh Bài Kiểm Tra Đầu Vào Cho Bé',
        passPdf: 'passsss',
        phone,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const {error} = await res.json();
    if (error) {
      console.log(error);
      alert('Đã xảy ra lỗi, vui lòng liên hệ admin để được hỗ trợ!');
      setIsSubmitting(false);
      return;
    } else {
      handleNext();
      resetForm();
    }

    setIsSubmitting(false);
    setOpen(false);
  };

  const renderValidationSchema = () => {
    let validation = {
      programId: Yup.string().required('Vui lòng chọn chương trình học'),
      name: Yup.string('Vui lòng nhập tên').required('Vui lòng nhập tên'),
      email: Yup.string('Vui lòng nhập email')
        .email('Email không hợp lệ')
        .required('Vui lòng nhập email'),
      phone: Yup.string()
        .matches(phoneRegExp, 'Số điện thoại không hợp lệ')
        .required('Vui lòng nhập số điện thoại')
    };

    if (parseInt(currentProgramId) === 1) {
      validation = {
        ...validation,
        subjects: Yup.array().min(1, 'Vui lòng chọn ít nhất một môn học'),
        gradeId: Yup.string().required('Vui lòng chọn lớp học'),
      };
    }
    if (parseInt(currentProgramId) === 2) {
      validation = {
        ...validation,
        subjects: Yup.array().min(1, 'Vui lòng chọn ít nhất một môn học'),
        gradeId: Yup.string().required('Vui lòng chọn lớp học'),
      };
    }

    if (parseInt(currentProgramId) === 3) {
      validation = {
        ...validation,
        subjects: Yup.array().min(1, 'Vui lòng chọn ít nhất một môn học'),
        gradeId: Yup.string().required('Vui lòng chọn lớp học'),
      };
    }

    if (parseInt(currentProgramId) === 4) {
      validation = {
        ...validation,
        age: Yup.number().required('Vui lòng nhập tuổi'),
        subjects: Yup.array().min(1, 'Vui lòng chọn ít nhất một môn học'),
        gradeId: Yup.string().required('Vui lòng chọn lớp học'),
      };
    }

    return Yup.object().shape({
      ...validation,
    });
  };

  return (<>
      <Loading open={open}/>


      <Formik
        className="w-full"
        initialValues={initialValues}
        enableReinitialize
        validationSchema={() => renderValidationSchema()}
        onSubmit={async (values, {resetForm}) => {
          handleSubmitForm(values, resetForm);

        }}
      >


        {({values, errors, touched, setFieldValue, isValid}) => (<Form>
          <Box>



            {activeStep === 0 ? (<Box className="flex flex-col gap-8">
              <Box className="flex flex-col gap-8">
                <Typography className="font-extrabold text-lg" variant="h6">
                  Chọn chương trình: <span className="text-red-500">*</span>
                </Typography>
                <Box>
                  <Field name="programId">
                    {({field}) => (<RadioGroup
                      name={field.name}
                      value={field.value}
                      onChange={(e) => {
                        field.onChange(e);
                        handleRenderSubjectByProgram(e.target.value, setFieldValue);
                      }}
                      className="flex flex-col justify-start md:flex-row md:justify-around"
                    >
                      {programs.map((program) => (<FormControlLabel
                        key={program.id}
                        id={program.nameVn}
                        value={program.id}
                        control={<Radio
                          sx={{
                            '&.Mui-checked': {
                              color: '#0C134F',
                            },
                          }}
                        />}
                        label={program.nameVn}
                      />))}
                    </RadioGroup>)}
                  </Field>
                  <ErrorMessage
                    component="div"
                    className="text-red-500"
                    name="programId"
                  />
                </Box>

                {parseInt(values.programId) === 1 && <ForeignAndCambridgeProgram/>}

                {parseInt(values.programId) === 2 && <IntegrateBilingualProgram/>}

                {parseInt(values.programId) === 3 && <CommonProgram/>}

                {parseInt(values.programId) === 4 && <CertificateProgram/>}

              </Box>

            </Box>) : ('')}
            {activeStep === 1 ? (<Box
              className={`flex flex-col ${activeStep === 1 ? '' : 'hidden'}`}
            >
              <Typography className="font-extrabold text-lg mb-2" variant="h6">
                Thông tin liên hệ
              </Typography>

              <Field name="name">
                {({field, form}) => (<TextField
                  {...field}
                  type="fullname"
                  className="mt-3"
                  label={<Typography className="m-1">Họ và tên <span className="text-red-500">*</span></Typography>}
                  variant="outlined"
                />)}
              </Field>
              {touched.name && errors.name && (<ErrorMessage
                name="name"
                className="text-red-500 text-xs"
                component="div"
              />)}

              <Field name="email">
                {({field, form}) => (<TextField
                  {...field}
                  type="email"
                  className="mt-4"
                  label={<Typography className="m-1">Địa chỉ email <span
                    className="text-red-500">*</span></Typography>}
                  variant="outlined"
                />)}
              </Field>
              <ErrorMessage
                name="email"
                className="text-red-500 text-xs"
                component="div"
              />

              <Field name="phone">
                {({field, form}) => (<TextField
                  {...field}
                  type="phone"
                  className="mt-4"
                  label={<Typography className="m-1">Số điện thoại <span
                    className="text-red-500">*</span></Typography>}
                  variant="outlined"
                  inputProps={{
                    style: {
                      color: '#0c134f', outline: '1px solid #0c134f!important',
                    },
                  }}
                />)}
              </Field>
              <ErrorMessage
                name="phone"
                className="text-red-500 text-xs"
                component="div"
              />

              <Field name="tutoringAddress">
                {({field, form}) => (<TextField
                  {...field}
                  className="mt-4"
                  label="Địa chỉ (nếu có nhu cầu học tại nhà)"
                  variant="outlined"
                  inputProps={{
                    style: {
                      color: '#0c134f', outline: '1px solid #0c134f!important',
                    },
                  }}
                />)}
              </Field>
            </Box>) : ('')}
            {activeStep >= 2 ? <RegistrationSuccess/> : ''}
          </Box>

          <div className="mt-3">
            <ReCAPTCHA
              ref={recaptchaRef}
              size="invisible"
              sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY}
            />
          </div>


          <Box className="flex justify-center">
            {activeStep === 0 ? <>{handleRenderButton(values)}</> : ''}
            {activeStep !== 0 && activeStep !== 2 && <Button
              onClick={handleBack}
              sx={{width: '120px'}}
              className={`${btnClass} cursor-pointer ca-primary-bg-color text-white`}
            >
              Trở lại
            </Button>}

            {activeStep === 1 && (<Button
              type="submit"
              sx={{width: '120px'}}
              className={
              `${btnClass} ml-3 ${isValid ? 'ca-primary-bg-color text-white ' : 'pointer-events-none cursor-not-allowed bg-gray-300 text-gray-100'}`}
            >
              {isSubmitting ? (
                <CircularProgress className="text-white" size={30} />
              ) : 'Đăng ký'}
            </Button>)}
          </Box>
        </Form>)}
      </Formik>
    </>

  );
}

const CommonProgram = () => {
  return (<>
      <Box>
        <Typography
          className="font-extrabold text-lg"
          variant="h6"
        >
          Chọn môn học: <span className="text-red-500">*</span>
        </Typography>
        <Box className="flex flex-col justify-center">
          <Box className="flex flex-col justify-start md:flex-row md:justify-around">
            {commonSubjects.map((item) => {
              return (<FormControlLabel
                key={`foreignAndCambridge_${item.id}`}
                className="flex whitespace-nowrap"
                control={<Field
                  type="checkbox"
                  name="subjects"
                  value={String(item.id)}
                  sx={{
                    '&.Mui-checked': {
                      color: '#0C134F',
                    },
                  }}
                  as={Checkbox}
                />}
                label={item.nameVn}
              />);
            })}
          </Box>
          <ErrorMessage
            component="div"
            className="text-red-500"
            name="subjects"
          />
        </Box>
      </Box>

      <Box className="flex flex-col justify-start gap-2 md:flex-row md:items-center md:gap-8">
        <Field name="gradeId">
          {({field, form}) => (<>
            <Typography
              variant="h6"
              className="whitespace-nowrap text-lg font-extrabold"
            >
              Chọn lớp học: <span className="text-red-500">*</span>
            </Typography>
            <FormControl name="ok" fullWidth>
              <Select
                {...field}
                labelId="grade"
                id="gradeId"
                name="gradeId"
                className="w-full md:w-[150px] h-8 border"
                error={form.errors.program && form.touched.program}
              >
                {grades.map((grade) => (<MenuItem key={grade.id} value={grade.id}>
                  {hashGrades(grade.id)}
                </MenuItem>))}
              </Select>
            </FormControl>
          </>)}
        </Field>
        <ErrorMessage
          name="gradeId"
          className="text-red-500"
          component="div"
        />
      </Box>
    </>

  )
}

const IntegrateBilingualProgram = () => {
  return (<>
      <Box>
        <Typography
          className="font-extrabold text-lg"
          variant="h6"
        >
          Chọn môn học: <span className="text-red-500">*</span>
        </Typography>
        <Box className="flex flex-col justify-center">
          <Box className="flex flex-col justify-start md:flex-row md:justify-around">
            {commonSubjects.map((item) => {
              return (<FormControlLabel
                key={`foreignAndCambridge_${item.id}`}
                className="flex whitespace-nowrap"
                control={<Field
                  type="checkbox"
                  name="subjects"
                  value={String(item.id)}
                  sx={{
                    '&.Mui-checked': {
                      color: '#0C134F',
                    },
                  }}
                  as={Checkbox}
                />}
                label={item.nameVn}
              />);
            })}
          </Box>
          <ErrorMessage
            component="div"
            className="text-red-500"
            name="subjects"
          />
        </Box>
      </Box>

      <Box className="flex flex-col justify-start gap-2 md:flex-row md:items-center md:gap-8">
        <Field name="gradeId">
          {({field, form}) => (<>
            <Typography
              variant="h6"
              className="whitespace-nowrap text-lg font-extrabold"
            >
              Chọn lớp học: <span className="text-red-500">*</span>
            </Typography>
            <FormControl name="ok" fullWidth>
              <Select
                {...field}
                labelId="grade"
                id="gradeId"
                name="gradeId"
                className="w-full md:w-[150px] h-8 border"
                error={form.errors.program && form.touched.program}
              >
                {grades.map((grade) => (<MenuItem key={grade.id} value={grade.id}>
                  {hashGrades(grade.id)}
                </MenuItem>))}
              </Select>
            </FormControl>
          </>)}
        </Field>
        <ErrorMessage
          name="gradeId"
          className="text-red-500"
          component="div"
        />
      </Box>
    </>

  )
}


const ForeignAndCambridgeProgram = () => {
  return (<>
      <Box>
        <Typography
          className="font-extrabold text-lg"
          variant="h6"
        >
          Chọn môn học: <span className="text-red-500">*</span>
        </Typography>
        <Box className="flex flex-col justify-center">
          <Box className="flex flex-col justify-start md:flex-row md:justify-around">
            {foreignAndCambridgeSubjects.map((item) => {
              return (<FormControlLabel
                key={`foreignAndCambridge_${item.id}`}
                className="flex whitespace-nowrap"
                control={<Field
                  type="checkbox"
                  name="subjects"
                  value={String(item.id)}
                  sx={{
                    '&.Mui-checked': {
                      color: '#0C134F',
                    },
                  }}
                  as={Checkbox}
                />}
                label={item.nameEn}
              />);
            })}
          </Box>
          <ErrorMessage
            component="div"
            className="text-red-500"
            name="subjects"
          />
        </Box>
      </Box>

      <Box className="flex flex-col justify-start gap-2 md:flex-row md:items-center md:gap-8">
        <Field name="gradeId">
          {({field, form}) => (<>
            <Typography
              variant="h6"
              className="whitespace-nowrap text-lg font-extrabold"
            >
              Chọn lớp học: <span className="text-red-500">*</span>
            </Typography>
            <FormControl name="ok" fullWidth>
              <Select
                {...field}
                labelId="grade"
                id="gradeId"
                name="gradeId"
                className="w-full md:w-[150px] h-8 border"
                error={form.errors.program && form.touched.program}
              >
                {grades.map((grade) => (<MenuItem key={grade.id} value={grade.id}>
                  {hashGrades(grade.id)}
                </MenuItem>))}
              </Select>
            </FormControl>
          </>)}
        </Field>
        <ErrorMessage
          name="gradeId"
          className="text-red-500"
          component="div"
        />
      </Box>
    </>

  )
}

const CertificateProgram = () => {
  return (<>
    <Box className="flex flex-col justify-start gap-2 md:flex-row md:items-center md:gap-8">
      <Typography
        variant="h6"
        className="whitespace-nowrap text-lg font-extrabold"
      >
        Độ tuổi của học viên: <span className="text-red-500">*</span>
      </Typography>

      <Field name="age">
        {({field, form}) => (<TextField
          {...field}
          size="small"
          type="number"
          sx={{width: '70px'}}
          inputProps={{
            style: {
              color: '#0c134f', padding: '3px 0px 3px 5px',
            }, min: 6, max: 18, placeholder: '6-18'
          }}
        />)}
      </Field>

      <ErrorMessage
        name="age"
        className="text-red-500"
        component="div"
      />
    </Box>

    <Box className="flex flex-col justify-start gap-2 md:flex-row md:items-center md:gap-8">
      <Field name={`certificateId`}>
        {({field, form}) => (<>
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
              error={form.errors.program && form.touched.program}
            >
              {certificates.map((item) => (<MenuItem
                key={`${certificates}_${item.id}`}
                value={item.id}
              >
                {item.code ?? item.shortCode}
              </MenuItem>))}
            </Select>
          </FormControl>
        </>)}
      </Field>
      <ErrorMessage
        name="certificateId"
        className="text-red-500"
        component="div"
      />
    </Box>
  </>);
}
