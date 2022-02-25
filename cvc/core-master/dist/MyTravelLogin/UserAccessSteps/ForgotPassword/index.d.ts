import React from "react";
import { IntlShape } from "react-intl";
interface IForgotPassword {
    intl: IntlShape;
    onCloseClick?(): void;
    isModal?: boolean;
}
declare const _default: React.FC<import("react-intl").WithIntlProps<IForgotPassword>> & {
    WrappedComponent: React.ComponentType<IForgotPassword>;
};
export default _default;
