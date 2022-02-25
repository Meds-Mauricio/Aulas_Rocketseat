import React from "react";
interface IAuthAmplifyContext {
    authAmplify: string;
    setAuthAmplify(isAuthAmplify: string): void;
    amplifyTempPwd: string;
    amplifyPwd?: string;
    setAmplifyPwd(pwd: string): void;
}
declare const AuthAmplifyProvider: React.FC;
declare function useAuthAmplifyContext(): IAuthAmplifyContext;
export { AuthAmplifyProvider, useAuthAmplifyContext };
