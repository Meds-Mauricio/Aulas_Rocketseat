export default styles;
declare function styles(theme: any): {
    root: {
        [x: number]: {
            padding: string;
        };
        padding: string;
    };
    main: {
        [x: number]: {
            marginBottom: any;
        };
    };
    mainItems: {
        [x: number]: {
            paddingTop: string;
        };
    };
    logoContainer: {
        [x: number]: {
            marginTop: string;
        };
        textAlign: string;
        "& img": {
            [x: number]: {
                maxWidth: string;
            };
            maxWidth: string;
            marginTop: string;
        };
    };
    links: {
        color: any;
        display: string;
        textDecoration: string;
        "& + &": {
            marginTop: any;
        };
    };
    title: {
        margin: string;
    };
    iconContainer: {
        display: string;
    };
    icon: {
        alignItems: string;
        background: any;
        borderRadius: string;
        color: any;
        display: string;
        justifyContent: string;
        height: string;
        width: string;
        "& + &": {
            marginLeft: any;
        };
    };
    paymentGrid: {
        [x: number]: {
            display: string;
        };
        borderTop: string;
        marginTop: any;
        paddingTop: any;
    };
    footer: {
        "&:before": {
            borderTop: string;
            content: string;
            display: string;
            margin: string;
            width: string;
        };
    };
    footerText: {
        color: any;
        "& + &": {
            marginLeft: string;
            "&:before": {
                content: string;
                marginRight: string;
            };
        };
    };
    breakMobile: {
        [x: number]: {
            display: string;
        };
    };
    list: {
        padding: number;
    };
    listItem: {
        display: string;
        listStyle: string;
        "& + &": {
            marginLeft: any;
        };
    };
};
