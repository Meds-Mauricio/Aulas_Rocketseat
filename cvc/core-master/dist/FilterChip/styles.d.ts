export function styles(theme: any): {
    root: {
        background: string;
        border: string;
        borderRadius: string;
        lineHeight: string;
        minHeight: string;
        padding: any;
        textTransform: string;
        width: string;
        "&:hover": {
            background: string;
            borderColor: any;
            color: any;
        };
    };
    rootLabel: {
        color: any;
    };
    disabled: {
        background: string;
        borderColor: string;
    };
    luggageLabel: {
        color: any;
    };
    disabledLabel: {
        color: any;
    };
    matrix: {
        height: string;
    };
    isAmenities: {
        padding: string;
    };
    isActive: {
        background: any;
        borderColor: any;
        "&:hover": {
            background: any;
            color: any;
        };
    };
    isActiveLabel: {
        color: any;
        "&:hover": {
            color: any;
        };
    };
};
