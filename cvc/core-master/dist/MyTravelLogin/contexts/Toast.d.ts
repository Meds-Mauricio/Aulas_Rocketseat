import React from "react";
export interface ToastMessage {
    id: string;
    type?: "success" | "error";
    title: string;
    description?: string;
}
interface ToastContextData {
    addToast(message: Omit<ToastMessage, "id">): void;
    removeToast(id: string): void;
}
declare const ToastProvider: React.FC;
declare function useToast(): ToastContextData;
export { ToastProvider, useToast };
