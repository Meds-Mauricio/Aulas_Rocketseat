declare function styles(theme: any): {
    root: {
        border: string;
        cursor: string;
        overflow: string;
        padding: any;
    };
    imgContainer: {
        height: string;
        overflow: string;
        position: string;
        width: string;
    };
    thumb: {
        display: string;
        left: string;
        position: string;
        transform: string;
        top: string;
    };
    title: {
        fontWeight: string;
        lineHeight: number;
        margin: number;
        "& + &": {
            marginTop: any;
        };
    };
    detail: {
        alignItems: string;
        display: string;
        justifyContent: string;
    };
    detailBtn: {
        color: any;
        height: string;
        minWidth: number;
        padding: number;
    };
    infoContainer: {
        display: string;
        margin: string;
    };
    footer: {
        borderTop: string;
        margin: string;
        paddingTop: any;
        textAlign: string;
    };
};
