import IAlmostThere from "./IAlmostThere";
import IChangePassword from "./IChangePassword";
import ICodeNonReceived from "./ICodeNonReceived";
import IConfirmMainScreen from "./IConfirmMainScreen";
import IForgotPassword from "./IForgotPassword";
import { IMainScreen } from "./IMainScreen";
import { INewRegister } from "./INewRegister";
import IPassword from "./IPassword";
import ISharedMessages from "./ISharedMessages";
import { ISocialLoginAccount } from "./ISocialLoginAccount";
import IUnverifiedAccount from "./IUnverifiedAccount";
import IValidationCode from "./IValidationCode";
export interface Page {
    MainScreen: IMainScreen;
    NewRegister: INewRegister;
    ConfirmMainScreen: IConfirmMainScreen;
    ForgotPassword: IForgotPassword;
    ValidationCode: IValidationCode;
    SharedMessages: ISharedMessages;
    CodeNonReceived: ICodeNonReceived;
    ChangePassword: IChangePassword;
    Password: IPassword;
    SocialLoginAccount: ISocialLoginAccount;
    UnverifiedAccount: IUnverifiedAccount;
    AlmostThere: IAlmostThere;
}
