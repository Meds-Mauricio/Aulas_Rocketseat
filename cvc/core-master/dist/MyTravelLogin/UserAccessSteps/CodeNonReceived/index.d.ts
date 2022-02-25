import React from "react";
import { IntlShape } from "react-intl";
interface ICodeNonReceived {
    intl: IntlShape;
    onCloseClick?(): void;
    isModal?: boolean;
}
declare const _default: React.FC<import("react-intl").WithIntlProps<ICodeNonReceived>> & {
    WrappedComponent: React.ComponentType<ICodeNonReceived>;
};
export default _default;
