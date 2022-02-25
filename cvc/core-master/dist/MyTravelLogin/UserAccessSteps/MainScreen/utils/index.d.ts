export declare enum IProviders {
    COGNITO = "cognito",
    LEGACY = "legacy",
    FACEBOOK = "facebook",
    APPLE = "apple",
    GOOGLE = "google",
    CORP = "corp"
}
export interface IUserExists {
    emailConfirmed: boolean;
    isSocial: boolean;
    provider: IProviders;
    nextStep?: string;
}
export declare function usersInProvider(usersExists: IUserExists[], amICorp?: boolean): IUserExists | undefined;
