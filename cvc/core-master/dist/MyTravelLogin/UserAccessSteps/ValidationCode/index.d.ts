import React from "react";
import { IntlShape } from "react-intl";
interface TValidationCode {
    intl: IntlShape;
    onCloseClick?(): void;
    isModal?: boolean;
}
declare const _default: React.FC<import("react-intl").WithIntlProps<TValidationCode>> & {
    WrappedComponent: React.ComponentType<TValidationCode>;
};
export default _default;
