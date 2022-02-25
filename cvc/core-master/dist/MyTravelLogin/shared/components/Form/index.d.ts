import React from "react";
import { FormHandles } from "@unform/core";
interface FormProps {
    children: React.ReactNode;
    handleSubmit: (data: any) => void;
}
declare const Form: React.ForwardRefExoticComponent<FormProps & React.RefAttributes<FormHandles>>;
export default Form;
