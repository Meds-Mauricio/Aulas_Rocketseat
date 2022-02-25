import React from "react";
interface IMyTravelLoginApp {
    isModal?: boolean;
    onCloseClick?(): void;
}
declare const MyTravelLoginApp: React.FC<IMyTravelLoginApp>;
export default MyTravelLoginApp;
