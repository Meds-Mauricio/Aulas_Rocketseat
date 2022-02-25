export function styles(theme: any): {
    root: {
        borderRadius: string;
        position: string;
        width: string;
        height: string;
        display: string;
        justifyContent: string;
        alignItems: string;
        textAlign: string;
        cursor: string;
    };
    container: {
        width: string;
    };
    card: {
        display: string;
        width: string;
        border: string;
        padding: string;
        borderRadius: string;
        marginBottom: string;
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
    cardHeader: {
        display: string;
        flexDirection: string;
        alignItems: string;
        justifyContent: string;
    };
    header: {
        display: string;
        marginBottom: any;
        alignItems: string;
    };
    cia: {
        textTransform: string;
    };
    ciaLogo: {
        marginRight: any;
        maxHeight: string;
        maxWidth: string;
    };
    timeline: {
        position: string;
        marginLeft: string;
        paddingLeft: string;
        textAlign: string;
        "&:before": {
            position: string;
            left: string;
            display: string;
            width: string;
            content: string;
            borderLeft: string;
            height: string;
        };
    };
    icon: {
        position: string;
        top: string;
        left: string;
        display: string;
        width: string;
        height: string;
        content: string;
        border: string;
        borderRadius: string;
        backgroundColor: string;
    };
    departure: {
        "&:before": {
            top: string;
        };
    };
    arrival: {
        "&:before": {
            bottom: string;
        };
    };
    contentTimeline: {
        marginBottom: string;
        "&:before": {
            top: string;
        };
    };
    await: {
        backgroundColor: string;
        borderRadius: string;
        textAlign: string;
        padding: string;
        marginLeft: string;
        marginRight: string;
        marginBottom: string;
        "&:last-child": {
            display: string;
        };
    };
    baggageCard: {
        margin: string;
        height: string;
        border: string;
        borderRadius: string;
        color: string;
        textAlign: string;
        padding: string;
        display: string;
        flexDirection: string;
        justifyContent: string;
    };
    active: {
        border: string;
        color: string;
    };
    footer: {
        marginTop: string;
    };
    footerText: {
        marginBottom: string;
    };
    baggageInfo: {
        textAlign: string;
    };
    row: {
        display: string;
        flexDirection: string;
        alignItems: string;
        marginBottom: string;
    };
    link: {
        fontWeight: string;
        color: string;
        cursor: string;
        textDecoration: string;
    };
};
