export function styles(theme: any): {
    root: {
        borderRadius: string;
        fontFamily: any;
        fontSize: string;
        height: string;
        overflow: string;
    };
    icon: {
        background: any;
        borderRadius: string;
        color: any;
        margin: number;
    };
    label: {
        padding: string;
        "&:empty": {
            display: string;
        };
    };
    spot: {
        background: string;
        color: string;
    };
    white: {
        background: string;
        boxShadow: string;
    };
    hotel: {
        background: string;
        color: string;
    };
    air: {
        background: string;
        color: string;
    };
    package: {
        background: string;
        color: string;
    };
    car: {
        background: string;
        color: string;
    };
    canceled: {
        background: string;
        color: string;
    };
    processed: {
        background: string;
        color: string;
    };
    approved: {
        background: string;
        color: string;
    };
    orange: {
        background: string;
        color: string;
    };
    noIcon: {
        minWidth: string;
        padding: string;
    };
    hasIcon: {
        paddingLeft: number;
        "&:empty": {
            display: string;
        };
    };
    hasIconLabel: {
        paddingLeft: string;
        "&:empty": {
            display: string;
        };
    };
};
