export function styles(theme: any): {
    noStop: {
        borderTop: string;
        display: string;
    };
    oneStop: {
        borderTop: string;
        display: string;
        position: string;
        "&:before": {
            background: string;
            borderRadius: string;
            content: string;
            height: string;
            left: string;
            position: string;
            transform: string;
            top: string;
            width: string;
        };
    };
    moreStop: {
        borderTop: string;
        display: string;
        position: string;
        "&:before": {
            background: string;
            borderRadius: string;
            content: string;
            height: string;
            left: string;
            position: string;
            top: string;
            width: string;
        };
        "&:after": {
            background: string;
            borderRadius: string;
            content: string;
            height: string;
            right: string;
            position: string;
            top: string;
            width: string;
        };
    };
};
