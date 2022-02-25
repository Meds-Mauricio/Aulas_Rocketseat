import React from "react";
export interface IUserData {
    email: string;
    name: string;
    lastName: string;
}
interface IUserContexData {
    user: IUserData;
    setUser(use: IUserData): void;
    setUserIdToken(idToken: string): void;
    userIdToken: string;
}
declare const UserDataProvider: React.FC;
declare function useUserData(): IUserContexData;
export { UserDataProvider, useUserData };
