import React from "react";
import { IntlShape } from "react-intl";
interface AlmostThereProps {
    onCloseClick?(): void;
    isModal?: boolean;
    intl: IntlShape;
}
declare const _default: React.FC<import("react-intl").WithIntlProps<AlmostThereProps>> & {
    WrappedComponent: React.ComponentType<AlmostThereProps>;
};
export default _default;
