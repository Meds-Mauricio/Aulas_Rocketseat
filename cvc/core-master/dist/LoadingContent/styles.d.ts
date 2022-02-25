export function styles(theme: any): {
    root: {
        animation: string;
        background: string;
        backgroundSize: string;
        borderRadius: string;
        display: string;
        minHeight: string;
        position: string;
        "&:before": {
            bottom: number;
            content: string;
            left: number;
            position: string;
            right: number;
            top: number;
        };
    };
    absolute: {
        borderRadius: number;
        height: string;
        left: number;
        position: string;
        top: number;
        width: string;
    };
};
