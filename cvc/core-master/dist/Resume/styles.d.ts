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
        listStyle: string;
    };
    leg: {
        alignItems: string;
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
    detailBtn: {
        [x: number]: {
            marginBottom: any;
        };
        color: any;
        display: string;
        height: string;
        padding: number;
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
    btnChangeFlight: {
        [x: number]: {
            width: string;
        };
        marginTop: string;
    };
};
