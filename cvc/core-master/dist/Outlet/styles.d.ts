export function styles(theme: any): {
    root: {
        [x: number]: {
            minHeight: string;
            padding?: undefined;
        } | {
            padding: any;
            minHeight?: undefined;
        };
    };
    title: {
        [x: number]: {
            margin: string;
        };
        display: string;
        margin: string;
    };
    breaktitle: {
        display: string;
    };
    pointer: {
        cursor: string;
    };
};
