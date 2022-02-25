import React from "react";
import { IntlShape } from "react-intl";
interface SocialLoginAccountProps {
    onCloseClick?(): void;
    isModal?: boolean;
    intl: IntlShape;
}
declare const _default: React.FC<import("react-intl").WithIntlProps<SocialLoginAccountProps>> & {
    WrappedComponent: React.ComponentType<SocialLoginAccountProps>;
};
export default _default;
