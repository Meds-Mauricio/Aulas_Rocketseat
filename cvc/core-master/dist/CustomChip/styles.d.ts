export function styles(theme: any): {
    root: {
        background: string;
        border: string;
        borderRadius: string;
        fontFamily: any;
        fontSize: string;
        height: string;
        padding: string;
        textTransform: string;
        "&:hover": {
            background: string;
            borderColor: string;
            color: any;
        };
    };
    primary: {
        background: string;
        color: string;
        "&:hover": {
            background: string;
            borderColor: string;
            color: string;
        };
    };
    disabled: {
        background: string;
        color: string;
    };
    outlined: {
        background: string;
        borderColor: string;
        color: string;
        "&:hover": {
            borderColor: string;
            background: string;
            color: any;
        };
        "&$disabled": {
            background: string;
            borderColor: string;
            color: string;
        };
    };
    icon: {
        color: any;
        display: string;
        marginLeft: string;
    };
};
