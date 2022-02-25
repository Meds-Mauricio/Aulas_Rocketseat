export function styles(theme: any): {
    root: {
        borderRadius: string;
        boxShadow: any;
        fontFamily: any;
        padding: string;
        position: string;
        "&:before": {
            border: string;
            borderTopStyle: string;
            bottom: string;
            content: string;
            display: string;
            height: number;
            left: string;
            position: string;
            transform: string;
            width: number;
        };
    };
    light: {
        background: any;
        color: any;
        "&:before": {
            borderColor: string;
        };
    };
    dark: {
        background: any;
        color: any;
        "&:before": {
            borderColor: string;
        };
    };
};
