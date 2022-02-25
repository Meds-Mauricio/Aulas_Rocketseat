export function styles(theme: any): {
    root: {
        [x: number]: {
            borderRadius: number;
            minHeight: string;
            padding: string;
            background?: undefined;
            boxShadow?: undefined;
            paddingRight?: undefined;
        } | {
            background: string;
            boxShadow: string;
            paddingRight: number;
            borderRadius?: undefined;
            minHeight?: undefined;
            padding?: undefined;
        };
    };
    container: {
        [x: number]: {
            padding: number;
        };
    };
    card: {
        [x: number]: {
            minHeight: string;
        };
        zIndex: any;
    };
    logo: {
        [x: number]: {
            display: string;
        };
        marginTop: string;
        width: string;
    };
    title: {
        [x: number]: {
            color: any;
            margin: string;
        };
        display: string;
    };
    submarino: {
        [x: number]: {
            display: string;
        };
    };
    subtitle: {
        [x: number]: {
            color: any;
            marginBottom?: undefined;
        } | {
            marginBottom: any;
            color?: undefined;
        };
        display: string;
    };
};
