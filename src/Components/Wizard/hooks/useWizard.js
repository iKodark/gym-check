import React from 'react';

const useWizard = ({ maxStep }) => {
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState({});

  const nextStep = (values) => {
    const newStep = step + 1;

    if (newStep > maxStep - 1) return;

    setData({ ...data, ...values });
    setStep(newStep);
  };

  const backStep = () => {
    const newStep = step - 1;
    setStep(newStep < 0 ? 0 : newStep);
  };

  const toStep = (step) => {
    setStep(step);
  };

  return {
    step,
    nextStep,
    backStep,
    toStep,
    maxStep,
    data
  };
};

export default useWizard;
