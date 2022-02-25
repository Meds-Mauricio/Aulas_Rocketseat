import { BrandContextType } from "../BrandContext/BrandContext";
export declare const featureToggles: (ctx: BrandContextType, toggle: string) => string | undefined;
export declare const verifyIsBrand: (ctx: any, brandName: any) => boolean;
export declare const setCookie: ({ prefix, value, expiresInDay, name }: {
    prefix: any;
    value: any;
    expiresInDay: any;
    name: any;
}) => void;
export declare const getCookie: ({ name }: {
    name: any;
}) => string;
export declare const getParam: (param: any) => any;
export declare const findCognitoIdToken: () => string | null | undefined;
