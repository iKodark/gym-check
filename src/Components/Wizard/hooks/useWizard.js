import React from 'react';

const useWizard = () => {
  const [step, setStep] = React.useState(0);

  const nextStep = () => {
    const newStep = step + 1;
    setStep(newStep);
  };

  const backStep = () => {
    const newStep = step - 1;
    setStep(newStep < 0 ? 0 : newStep);
  };

  return {
    step,
    nextStep,
    backStep
  };
};

export default useWizard;
