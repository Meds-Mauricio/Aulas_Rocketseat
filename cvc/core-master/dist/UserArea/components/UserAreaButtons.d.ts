import React from "react";
interface IUserAreaButtons {
    userName: string;
    lightTheme: string;
    className: string;
    onClickLogout: () => void;
    onClickMyTravels?: () => void;
    employer?: boolean;
    newLogin: boolean;
    isCVC?: string;
    isMobile?: boolean;
}
declare const UserAreaButtons: React.FC<IUserAreaButtons>;
export default UserAreaButtons;
