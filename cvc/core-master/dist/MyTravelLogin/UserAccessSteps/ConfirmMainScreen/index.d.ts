import React from "react";
import { IntlShape } from "react-intl";
declare type TConfirmMainScreen = {
    intl: IntlShape;
};
interface RenderStepsSwitchProps extends TConfirmMainScreen {
    onCloseClick?(): void;
    isModal?: boolean;
}
declare const _default: React.FC<import("react-intl").WithIntlProps<RenderStepsSwitchProps>> & {
    WrappedComponent: React.ComponentType<RenderStepsSwitchProps>;
};
export default _default;
