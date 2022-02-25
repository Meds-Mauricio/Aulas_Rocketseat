import React, { ReactNode } from "react";
interface CheckboxProps {
    name: string;
    value: any;
    label: string | ReactNode;
}
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
