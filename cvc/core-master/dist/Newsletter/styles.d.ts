export function styles(theme: any): {
    root: {
        [x: number]: {
            minHeight: string;
            position: string;
            padding?: undefined;
        } | {
            padding: any;
            minHeight?: undefined;
            position?: undefined;
        };
    };
    title: {
        [x: number]: {
            display: string;
        };
    };
    grid: {
        [x: number]: {
            margin: string;
        };
        alignItems: string;
        margin: string;
        width: string;
    };
    text: {
        color: any;
    };
    link: {
        color: any;
    };
    icon: {
        [x: number]: {
            left: string;
            position: string;
        };
        color: any;
    };
    successBox: {
        [x: number]: {
            padding: string;
        };
    };
    gridTitle: {
        padding: string;
    };
    gridData: {
        width: string;
        margin: number;
    };
    gridInfo: {
        padding: string;
        margin: number;
    };
};
