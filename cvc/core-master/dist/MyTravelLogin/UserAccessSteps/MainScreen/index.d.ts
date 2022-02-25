import React from "react";
import { IntlShape } from "react-intl";
interface IInternalLogin {
    intl: IntlShape;
}
interface MainScreenProps extends IInternalLogin {
    onCloseClick?(): void;
    isModal?: boolean;
}
declare const _default: React.FC<import("react-intl").WithIntlProps<MainScreenProps>> & {
    WrappedComponent: React.ComponentType<MainScreenProps>;
};
export default _default;
