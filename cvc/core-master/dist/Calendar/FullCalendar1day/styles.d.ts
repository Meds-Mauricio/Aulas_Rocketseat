export function styles(theme: any): {
    container: {
        [x: number]: {
            borderRadius: string;
            boxShadow: any;
        };
        background: any;
    };
    calendar: {
        [x: number]: {
            background: any;
            bottom: number;
            left: number;
            height: string;
            overflow: string;
            position: string;
            right: number;
            top: number;
            padding?: undefined;
        } | {
            height: string;
            left: string;
            padding: string;
            position: string;
            top: string;
            background?: undefined;
            bottom?: undefined;
            overflow?: undefined;
            right?: undefined;
        };
        overflow: string;
        transition: string;
        zIndex: any;
    };
    closed: {
        height: number;
    };
    header: {
        [x: number]: {
            borderBottom: string;
            flexDirection: string;
            alignItems?: undefined;
        } | {
            alignItems: string;
            borderBottom?: undefined;
            flexDirection?: undefined;
        };
        display: string;
        justifyContent: string;
        padding: any;
    };
    title: {
        [x: number]: {
            alignItems: string;
            display: string;
            paddingBottom: any;
            position: string;
            "&:after": {
                borderTop: string;
                bottom: number;
                content: string;
                left: number;
                position: string;
                right: number;
            };
        };
        color: any;
    };
    icon: {
        marginRight: any;
    };
    dates: {
        [x: number]: {
            marginTop: any;
            width?: undefined;
        } | {
            width: string;
            marginTop?: undefined;
        };
        display: string;
    };
    datesItem: {
        flex: number;
        "& + &": {
            marginLeft: any;
        };
    };
    dateInput: {
        padding: number;
    };
    content: {
        [x: number]: {
            height: string;
            position: string;
            width: string;
        };
    };
    footer: {
        background: any;
        boxShadow: any;
        bottom: number;
        opacity: number;
        padding: any;
        position: string;
        transition: string;
        width: string;
        boxSizing: string;
    };
    showFooter: {
        opacity: number;
    };
    input: {
        fontSize: string;
    };
};
