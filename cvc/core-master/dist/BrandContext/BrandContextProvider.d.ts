import React from "react";
import { BrandContextType } from "./BrandContext";
export declare function getHostName(req?: any): {
    hostname: string;
};
export declare function brandResolver(brands: BrandContextType[], hostname: string): BrandContextType;
export declare function BrandContextProvider({ brand, brands, hostname, children }: {
    brand?: BrandContextType;
    brands?: BrandContextType[];
    hostname: string;
    children: JSX.Element;
}): JSX.Element;
export declare const ClientBasedAllBrands: React.Context<null>;
export declare function InternalApp({ hostname, children }: {
    hostname: any;
    children: any;
}): JSX.Element;
export declare function UserDataProviderCustom({ children }: {
    children: any;
}): JSX.Element;
export declare function ClientBasedApp({ contextPath, hostname, children }: {
    contextPath: any;
    hostname: any;
    children: any;
}): JSX.Element;
