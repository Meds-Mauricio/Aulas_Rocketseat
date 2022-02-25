import React from "react";
interface HeaderLoginProps {
    onCloseClick?(): void;
    previousStep: string;
    isModal?: boolean;
}
declare const HeaderLogin: React.FC<HeaderLoginProps>;
export default HeaderLogin;
