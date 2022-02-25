declare enum IProviders {
    COGNITO = "cognito",
    LEGACY = "legacy",
    FACEBOOK = "facebook",
    APPLE = "apple",
    GOOGLE = "google"
}
export interface IUserExists {
    emailConfirmed: boolean;
    isSocial: boolean;
    provider: IProviders;
    nextStep?: string;
}
export declare function usersInProvider(usersExists: IUserExists[]): IUserExists | undefined;
export {};
