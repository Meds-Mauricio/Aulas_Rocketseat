import React from "react";
import { Props as InputMaskProps } from "react-input-mask";
interface InputProps extends Omit<InputMaskProps, "mask"> {
    name: string;
    placeholderText: React.ReactElement | null | string;
    type?: "number" | "email" | "text" | "password" | "hidePassword";
    maxLength?: number;
    showTip?: boolean;
    infoMessage?: string;
    hasMask?: boolean;
    mask?: string | (string | RegExp)[];
    disabledInput?: boolean;
    shrink?: boolean;
}
declare const Input: React.FC<InputProps>;
export default Input;
