import React from 'react';

const useWizard = ({ maxStep }) => {
  const [step, setStep] = React.useState(0);

  const nextStep = () => {
    const newStep = step + 1;
    setStep(newStep > maxStep - 1 ? step : newStep);
  };

  const backStep = () => {
    const newStep = step - 1;
    setStep(newStep < 0 ? 0 : newStep);
  };

  const toStep = (step) => {
    setStep(step);
  };

  React.useEffect(() => {
    const wizardStorage = JSON.parse(localStorage.getItem('wizard'));
    localStorage.setItem('wizard', JSON.stringify({ ...wizardStorage, step: step }));
  }, [step]);

  return {
    step,
    nextStep,
    backStep,
    toStep,
    maxStep
  };
};

export default useWizard;
