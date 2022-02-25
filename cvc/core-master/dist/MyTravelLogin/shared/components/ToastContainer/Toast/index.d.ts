import React from "react";
import { ToastMessage } from "../../../../contexts/Toast";
import { WithWidth } from "@material-ui/core/withWidth";
interface ToastProps extends WithWidth {
    message: ToastMessage;
    key: string;
}
declare const _default: React.ComponentType<Pick<ToastProps, "key" | "message"> & import("@material-ui/core/withWidth").WithWidthProps>;
export default _default;
