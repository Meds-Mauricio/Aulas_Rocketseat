import React from "react";
interface ModalLoginProps {
    newLogin?: string;
    children?: React.ReactNode;
    textBtnLogin: string;
    isMobile?: boolean;
}
declare global {
    interface Window {
        hj: any;
    }
}
declare const ModalLogin: React.FC<ModalLoginProps>;
export default ModalLogin;
