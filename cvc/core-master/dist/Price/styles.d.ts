export function styles(theme: any): {
    root: {};
    hotel: {
        color: string;
    };
    package: {
        color: string;
    };
    oldPrice: {
        textDecoration: string;
        "&.price_hotel": {
            textDecorationColor: string;
        };
        "&.price_package": {
            textDecorationColor: string;
        };
    };
};
