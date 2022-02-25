export interface IModalConfig {
    open: boolean;
    setOpen: void;
}
export interface IMyTravelLogin {
    isModal: boolean;
    awsAmplifyConfig: configAmplifyAws;
    modalConfig?: IModalConfig;
    onCloseClick?(): void;
}
export interface configAmplifyAws {
    region: string;
    userPoolId: string;
    userPoolWebClientId: string;
    domain: string;
}
