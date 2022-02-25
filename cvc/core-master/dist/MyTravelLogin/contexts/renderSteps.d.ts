import React from "react";
interface RenderStepsContextData {
    currentStep: string;
    renderNewStep(step: string | "NewRegister" | "ChangePassword"): void;
    previousStep: string;
    setPreviousStep(prev: string): any;
    toggleStepsWithModal: boolean;
    setToggleStepsWithModal(): void;
    hasCheckedValidationCode: boolean;
}
declare const RenderStepsProvider: React.FC;
declare function useRenderSteps(): RenderStepsContextData;
export { RenderStepsProvider, useRenderSteps };
