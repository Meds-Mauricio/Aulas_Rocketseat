import React from "react";
import { IntlShape } from "react-intl";
interface TPasswordProps {
    onCloseClick?(): void;
    intl: IntlShape;
    isModal?: boolean;
}
declare const _default: React.FC<import("react-intl").WithIntlProps<TPasswordProps>> & {
    WrappedComponent: React.ComponentType<TPasswordProps>;
};
export default _default;
