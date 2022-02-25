import React from "react";
import { IntlShape } from "react-intl";
interface TChangePassword {
    intl: IntlShape;
    onCloseClick?(): void;
    isModal?: boolean;
}
declare const _default: React.FC<import("react-intl").WithIntlProps<TChangePassword>> & {
    WrappedComponent: React.ComponentType<TChangePassword>;
};
export default _default;
