import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const steps = [
    {
        label: 'Select Crop',
        description: `Choose the crop you wish to sow from the available options. Scroll through the list to find your preferred crop, considering factors such as climate, soil conditions, and personal preferences. Once selected, proceed to the next step.`,
    },
    {
        label: 'Set Sowing Date',
        description:
            'Pick a suitable date for sowing your chosen crop. Consider local climate conditions, seasonal variations, and any specific requirements for the selected crop. This step ensures optimal growth and harvest. After deciding on the date, move on to the final step.',
    },
    {
        label: 'Set Alarm',
        description: `In this step, set a reminder alarm for the selected sowing date. This will help you stay organized and ensure timely action. Adjust the alarm settings according to your preferences, such as notification frequency and lead time before the selected date. Once the alarm is set, you're all set to successfully sow and cultivate your chosen crop.`,
    },
];

export default function VStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [selectedCrop, setSelectedCrop] = React.useState(null);
    const [selectedDate, setSelectedDate] = React.useState(null);
  

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleCropSelection = (crop) => {
        setSelectedCrop(crop);
        handleNext();
      };
    
      const handleDateSelection = (date) => {
        setSelectedDate(date);
        handleNext();
      };


    return (
        <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        
                        <StepLabel
                            optional={
                                index === 2 ? (
                                    <Typography variant="caption">Last step</Typography>
                                ) : null
                            }
                        >
                            {step.label}
                        </StepLabel>
                        <StepContent>
                            <Typography>{step.description}</Typography>
                            <Box sx={{ mb: 2 }}>
                                <div>
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                    </Button>
                                    <Button
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Reset
                    </Button>
                </Paper>
            )}
        </Box>
    );
}