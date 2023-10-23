import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { useState } from 'react';
import RegisterPDF from './RegisterPDF';
import styled from '@emotion/styled';
import useMediaQuery from '@mui/material/useMediaQuery';

const steps = ['Chọn chương trình', 'Điền thông tin liên hệ', 'Đăng ký'];
const StepperWrapper = styled.div`
  & svg.Mui-active {
    color: #0c134f !important;
  }
  ,
  & svg.Mui-completed {
    color: #0c134f !important;
  }
  ,
  svg {
    border: 1px solid;
    border-radius: 50%;
    padding: 1px;
  }
`;
export default function CourseRegister() {
  const [activeStep, setActiveStep] = useState(0);

  const smallScreen = useMediaQuery("(max-width: 768px)");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    if (activeStep == 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container maxWidth="lg">
      <Box className="py-12 m-auto">
        <StepperWrapper>
          <Stepper
            orientation={smallScreen ? "vertical" : "horizontal"}
            activeStep={activeStep} 
            className="pb-12 ">
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps} className="whitespace-nowrap">
                    <Typography className="font-extrabold">{label}</Typography>
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </StepperWrapper>
        <Container>
          <RegisterPDF
            activeStep={activeStep}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        </Container>
      </Box>
    </Container>
  );
}
