import React from "react";
import { ToastMessage } from "../../../contexts/Toast";
interface ToastContainerProps {
    messages: ToastMessage[];
}
declare const ToastContainer: React.FC<ToastContainerProps>;
export default ToastContainer;
