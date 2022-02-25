import React from "react";
import { WithWidth } from "@material-ui/core/withWidth";
interface Props extends WithWidth {
    onCloseClick?(): void;
    isModal?: boolean;
}
declare const _default: React.ComponentType<Pick<Props & {
    children?: React.ReactNode;
}, "children" | "isModal" | "onCloseClick"> & import("@material-ui/core/withWidth").WithWidthProps>;
export default _default;
