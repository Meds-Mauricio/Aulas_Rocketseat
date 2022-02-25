import React from "react";
interface MessageValidationProps {
    message: string;
    isError?: boolean;
    isInfo?: boolean;
}
declare const MessageValidation: React.ForwardRefExoticComponent<MessageValidationProps & React.RefAttributes<HTMLDivElement>>;
export default MessageValidation;
