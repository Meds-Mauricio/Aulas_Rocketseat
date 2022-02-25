import React from "react";
import { IntlShape } from "react-intl";
interface TranslateProps {
    id: string;
    value?: any;
    intl: IntlShape;
}
declare const _default: React.FC<import("react-intl").WithIntlProps<TranslateProps>> & {
    WrappedComponent: React.ComponentType<TranslateProps>;
};
export default _default;
