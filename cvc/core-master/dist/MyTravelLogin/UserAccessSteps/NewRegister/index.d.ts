import React from "react";
import { IntlShape } from "react-intl";
interface INewRegister {
    intl: IntlShape;
    onCloseClick?(): void;
    isModal?: boolean;
}
declare const _default: React.FC<import("react-intl").WithIntlProps<INewRegister>> & {
    WrappedComponent: React.ComponentType<INewRegister>;
};
export default _default;
