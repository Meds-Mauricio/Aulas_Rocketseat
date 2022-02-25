import React from "react";
interface iLoginContext {
    isModal: boolean;
    onCloseClick(): void;
}
export declare function useLoginContext(): iLoginContext;
declare const AppProvider: React.FC<any>;
export default AppProvider;
