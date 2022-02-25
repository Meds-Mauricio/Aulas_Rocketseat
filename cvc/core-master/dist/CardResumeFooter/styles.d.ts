export function styles(theme: any): {
    root: {
        boxShadow: any;
        padding: number;
        display: string;
        flexDirection: string;
        justifyContent: string;
    };
    price: {
        [x: number]: {
            padding: any;
        };
        background: any;
        borderRadius: string;
        boxShadow: any;
        overflowX: string;
        padding: any;
        position: string;
        display: string;
        bottom: number;
        flexDirection: string;
        justifyContent: string;
        "&:before": {
            [x: number]: {
                borderTop: string;
                bottom: number;
                width: number;
            };
            content: string;
            display: string;
            left: number;
            position: string;
            top: number;
            width: string;
        };
    };
    priceLabel: {
        display: string;
    };
    detailBtn: {
        [x: number]: {
            marginBottom: any;
        };
        color: any;
        display: string;
        height: string;
        padding: number;
    };
    priceTotalAir: {
        color: any;
        marginLeft: string;
    };
    priceTotalPackage: {
        color: string;
        marginLeft: string;
    };
    footerLogo: {
        [x: number]: {
            textAlign: string;
        };
        width: string;
        textAlign: string;
    };
    logo: {
        height: string;
    };
    column: {
        display: string;
        flexDirection: string;
    };
    row: {
        display: string;
        flexDirection: string;
        alignItems: string;
    };
    priceFooter: {
        display: string;
        flexDirection: string;
        alignItems: string;
        justifyContent: string;
    };
};
