import React from "react";
interface ButtonProps {
    text: any;
    type?: string;
    isSocialNetwork?: boolean;
    icon?: React.FC;
    handlerClick?: () => Promise<any> | undefined | void;
}
declare const InternalButton: React.FC<ButtonProps>;
export default InternalButton;
