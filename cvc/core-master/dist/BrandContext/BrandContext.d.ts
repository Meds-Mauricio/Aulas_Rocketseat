import React from "react";
export declare enum Brand {
    Internal = "internal",
    Sub = "Sub",
    CVC = "CVC"
}
export declare type MenuItem = {
    product: string;
    label: string;
    link: string;
    target?: string;
    icon: string;
    id?: string;
};
declare type MenuType = {
    principals: MenuItem[];
    hiddenPrincipals: MenuItem[];
    hiddenOthers: MenuItem[];
    others: MenuItem[];
    phone: string;
    phoneSales?: string;
    help: string;
    register: string;
    login: string;
};
export declare type FooterType = {
    sections: {
        title: string;
        items: {
            type: string;
            text: string;
            attributes: {
                [key: string]: string | undefined;
                target: string;
                href: string;
                title: string;
                rel: string;
            };
        }[];
    }[];
    appTitle: string;
    apps: {
        name: string;
        image: string;
        url: string;
    }[];
    socialNetworksTitle: string;
    socialNetworks: {
        name: string;
        icon: string;
        attributes: {
            [key: string]: string;
            target: string;
            href: string;
        };
    }[];
    payments: {
        title: string;
        flags: {
            name: string;
            icon: string;
        }[];
    }[];
    texts: {
        text: string;
        textOnBreakMobile: string;
    }[];
};
export declare type Theme = {
    themeName: string;
    air: string;
    alert: string;
    approved: string;
    backdrop: string;
    backdrop70: string;
    backdrop100: string;
    border: string;
    canceled: string;
    car: string;
    contrastSecondaryText: string;
    disabled: string;
    error: string;
    hotel: string;
    offwhite: string;
    packageColor: string;
    primary: string;
    primaryAlpha: string;
    primaryAlphaDark: string;
    primaryDark: string;
    primaryDarkHover: string;
    primaryLight: string;
    primaryLighter: string;
    primaryText: string;
    processed: string;
    secondary: string;
    secondaryDark: string;
    secondaryHover: string;
    secondaryLighter: string;
    secondaryText: string;
    spot: string;
    success: string;
    successHover: string;
    tabs: string;
    tabsHover: string;
    white: string;
    white30: string;
    regular: string;
    bold: string;
};
export declare type BrandContextType = {
    id: string;
    name: string;
    theme: Theme;
    hosts: string[];
    brand: Brand;
    gtwData: {
        branchId: string;
        agentSign: string;
    };
    gtm: string;
    omnilogicScript: string;
    menu: MenuType;
    footer: FooterType;
    logo: {
        dark: string;
        light: string;
        preferredWidth: string;
        preferredWidthMobile: string;
    };
    favicon: {
        small: string;
        big: string;
    };
    headerImageBg?: {
        desktop: string;
        mobile: string;
    };
    homeMotorImageBg?: string;
    homeMessages?: {
        [key: string]: string;
    };
    imageProcessorPath?: string;
    featureToggles: string[];
    compl?: any;
    hotjarIds?: {
        mytravelsFront: number;
        customerLoyalty: number;
    };
    termConditionLink: string;
    privacityLink: string;
};
export declare const BrandContext: React.Context<BrandContextType>;
export declare function useFetchAllBrands(endpoint: any): null;
export {};
