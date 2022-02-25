export interface IEmail {
    type: string;
    email: string;
    verified: boolean;
}
export interface IPhone {
    type: string;
    countryCode?: string;
    phoneNumber: string;
    channels?: string[];
    verified?: boolean;
}
export interface IContact {
    emails?: IEmail[];
    phones?: IPhone[];
}
export interface IAddress {
    type: string;
    street: string;
    number: string;
    neighborhood: string;
    complement: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
}
export interface IProfileData {
    name?: string;
    cpf?: string;
    "idm_user_id"?: string;
    userId?: string;
    email: string;
    birthdate?: string;
    contact: IContact;
    addresses: IAddress[];
    settings?: any;
    acceptedMaisCVC?: boolean;
}
export interface IPatchProfile {
    name: string;
    birthdate: string;
    contact: IContact;
    cpf: string;
    acceptedMaisCVC?: boolean;
}
export interface IProfileContext {
    profileData: IProfileData;
    getProfileInformations(): Promise<void>;
    patchProfile(profileInfo: IPatchProfile): Promise<void>;
    profileLoading: boolean;
    isPatchProfileScreen: boolean;
    setIsPatchProfileScreenToggle(isPatchProfileScreen: boolean): void;
    setIsRegisterUserProfileStepToggle(isRegisterProfile: boolean): void;
    isRegisterUserProfileStep: boolean;
    setProfileData(profileData: IProfileData): void;
}
