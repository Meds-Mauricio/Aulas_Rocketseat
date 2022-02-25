export function styles(theme: any): {
    root: {
        boxShadow: any;
        padding: number;
    };
    legContainer: {
        background: any;
        borderRadius: string;
        boxShadow: any;
        overflow: string;
        margin: number;
        padding: any;
    };
    leg: {
        listStyle: string;
        "& + &": {
            borderTop: string;
            marginTop: any;
            paddingTop: any;
        };
    };
    header: {
        display: string;
        marginBottom: any;
    };
    cia: {
        textTransform: string;
    };
    ciaLogo: {
        marginRight: any;
        maxHeight: string;
        maxWidth: string;
    };
    date: {
        display: string;
    };
    price: {
        [x: number]: {
            padding: any;
        };
        background: any;
        borderRadius: string;
        boxShadow: any;
        overflowX: string;
        padding: any;
        position: string;
        "&:before": {
            [x: number]: {
                borderTop: string;
                borderLeft: string;
                bottom: number;
                width: number;
            };
            borderTop: string;
            content: string;
            display: string;
            left: number;
            position: string;
            top: number;
            width: string;
        };
    };
    priceLabel: {
        display: string;
    };
    detailBtn: {
        [x: number]: {
            marginBottom: any;
        };
        color: any;
        display: string;
        height: string;
        padding: number;
    };
    priceTotalAir: {
        color: any;
        marginLeft: string;
    };
    priceTotalPackage: {
        color: string;
        marginLeft: string;
    };
    luggage: {
        color: any;
    };
    centerContent: {
        textAlign: string;
        justifyContent: string;
        alignItems: string;
    };
    stops: {
        padding: string;
    };
    stopsIcon: {
        color: any;
    };
    airport: {
        display: string;
    };
    legFooter: {
        [x: number]: {
            flexDirection: string;
        };
        display: string;
        justifyContent: string;
    };
    spacing: {
        justifyContent: string;
    };
    title: {
        padding: string;
    };
    paddingTop24: {
        paddingTop: any;
    };
    btnChangeFlight: {
        [x: number]: {
            marginTop: string;
            width: string;
        };
    };
    noWrap: {
        flexWrap: string;
        alignItems: string;
        paddingBottom: any;
        paddingTop: any;
    };
    radio: {
        "&$checked": {
            color: any;
        };
    };
    checked: {};
    orangeColor: {
        color: any;
    };
    tooltip: {
        "& span.tooltip": {
            top: string;
            left: string;
        };
    };
    modal: {
        position: string;
        zIndex: number;
        top: number;
        bottom: number;
        left: number;
        right: number;
        width: string;
    };
    scroll: {
        overflow: string;
        height: string;
        width: string;
        backgroundColor: string;
        display: string;
        alignItems: string;
        flexDirection: string;
    };
    close: {
        display: string;
        flexDirection: string;
        alignItems: string;
        borderBottom: string;
        padding: string;
        width: string;
    };
};
