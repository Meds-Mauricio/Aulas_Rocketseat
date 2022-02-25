import React from "react";
interface IUserAreaInfo {
    text?: string | React.ReactNode;
    withIcon?: boolean;
    rtl?: boolean;
    isMobile?: boolean;
}
declare const UserAreaInfo: ({ text, withIcon, rtl, isMobile }: IUserAreaInfo) => JSX.Element;
export default UserAreaInfo;
