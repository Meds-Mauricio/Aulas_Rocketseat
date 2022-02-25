import React from "react";
import { IntlShape } from "react-intl";
interface IInternalLogin {
    intl: IntlShape;
    onCloseClick?(): void;
    isModal?: boolean;
}
declare const _default: React.FC<import("react-intl").WithIntlProps<IInternalLogin>> & {
    WrappedComponent: React.ComponentType<IInternalLogin>;
};
export default _default;
