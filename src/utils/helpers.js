export const getNextStep = (steps, currentStepId) => {
    const currentIndex = steps.findIndex((step) => step.id === currentStepId);
    return steps[currentIndex + 1] || null;
  };
  
  export const getPreviousStep = (steps, currentStepId) => {
    const currentIndex = steps.findIndex((step) => step.id === currentStepId);
    return steps[currentIndex - 1] || null;
  };
  