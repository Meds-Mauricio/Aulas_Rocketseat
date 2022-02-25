import React from "react";
import { LOCALES } from "./locales";
interface ProviderProps {
    locale: LOCALES;
    children: React.ReactNode;
}
declare const Provider: React.FC<ProviderProps>;
export default Provider;
