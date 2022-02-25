export function styles(theme: any): {
    root: {
        [x: number]: {
            alignItems: string;
            cursor: string;
            display: string;
            height: string;
            justifyContent: string;
            padding: any;
        };
        border: string;
        borderRadius: string;
        color: any;
        position: string;
        textAlign: string;
        transition: string;
        whiteSpace: string;
    };
    header: {
        background: any;
        color: any;
        margin: string;
        padding: string;
        position: string;
        "&:before": {
            background: any;
            borderRadius: string;
            bottom: number;
            content: string;
            height: any;
            left: number;
            position: string;
            right: number;
        };
    };
    noModal: {
        border: string;
        cursor: string;
        height: string;
        flexDirection: string;
        textAlign: string;
    };
    noModalMore: {
        [x: number]: {
            background: any;
            borderRadius: number;
            height: string;
            left: number;
            margin: string;
            overflow: string;
            padding: any;
            position: string;
            right: number;
            transition: string;
            top: number;
            zIndex: any;
        };
    };
    active: {
        background: any;
        color: any;
        paddingRight: any;
        transition: string;
    };
    opened: {
        background: any;
        color: any;
        cursor: string;
        transition: string;
    };
    iconOpened: {
        color: any;
        transition: string;
        transform: string;
    };
    iconClosed: {
        transition: string;
    };
    buttonDelete: {
        background: string;
        border: number;
        color: any;
        cursor: string;
        outline: string;
        marginRight: string;
    };
    title: {
        [x: number]: {
            marginRight: any;
            padding: string;
        };
        display: string;
        cursor: string;
        padding: string;
    };
    container: {
        color: any;
        height: number;
        overflow: string;
        position: string;
        minWidth: string;
    };
    noModalContainer: {
        [x: number]: {
            margin: string;
            maxWidth: string;
            minWidth: string;
            "li div >&"?: undefined;
        } | {
            "li div >&": {
                padding: string;
            };
            margin?: undefined;
            maxWidth?: undefined;
            minWidth?: undefined;
        };
        height: string;
        position: string;
    };
    noModalContainerMobile: {
        paddingBottom: string;
    };
    grid: {
        minWidth: string;
    };
    open: {
        background: any;
        borderRadius: any;
        boxShadow: any;
        height: string;
        left: string;
        padding: string;
        right: string;
        textAlign: string;
        top: string;
        zIndex: any;
    };
    content: {
        marginBottom: any;
        padding: number;
        overflow: string;
    };
    contentMore: {
        margin: string;
        padding: number;
        overflow: string;
    };
    contentItem: {
        listStyle: string;
    };
    item: {
        marginLeft: any;
    };
    footer: {
        [x: number]: {
            background: any;
            bottom: number;
            left: number;
            padding: any;
            right: number;
        };
        display: string;
        justifyContent: string;
    };
    footerMobile: {
        opacity: number;
        position: string;
    };
    showFooterMobile: {
        opacity: number;
    };
    btn: {
        minWidth: number;
        padding: number;
    };
    btnReset: {
        color: any;
        float: string;
    };
    btnApply: {
        [x: number]: {
            color: any;
        };
        color: any;
        minWidth: number;
        padding: number;
    };
};
