import React, { ReactNode } from "react";
import { AuthClass } from "aws-amplify/dist/aws-amplify";
interface ILogout {
    noReload?: boolean;
    willBeSavedInGA?: boolean;
}
interface IUserDataContext {
    currentUser: any;
    isUserAuth: boolean;
    setIsUserAuth(isUserAuth: any): void;
    Auth: AuthClass;
    isConfig: boolean;
    setIsConfig(): Promise<void>;
    setUserIdToken(idToken: string): void;
    userIdToken: string;
    logout(iLogout?: ILogout): Promise<void>;
}
declare global {
    interface Window {
        fingerprint: any;
    }
}
interface IUserProvider {
    config: any;
    children: ReactNode;
}
declare const UserDataProvider: React.FC<IUserProvider>;
declare function useUserDataContext(): IUserDataContext;
export { UserDataProvider, useUserDataContext };
