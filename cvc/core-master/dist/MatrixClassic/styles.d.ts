export function styles(theme: any): {
    item: {
        marginTop: any;
        "& + &": {
            borderTop: string;
            marginTop: any;
            paddingTop: any;
        };
    };
    matrixBestPrice: {
        color: any;
    };
    matrixPrice: {
        display: string;
        marginTop: any;
    };
    matrixBestPriceIcon: {
        background: any;
        color: any;
        borderRadius: string;
        fill: string;
        marginRight: any;
    };
    matrixBestPriceTag: {
        bottom: string;
        left: string;
        position: string;
        transform: string;
    };
    img: {
        marginBottom: any;
        marginLeft: any;
        verticalAlign: string;
        maxHeight: number;
        maxWidth: number;
    };
    moreBtn: {
        marginTop: any;
    };
    imgLoading: {
        display: string;
        height: any;
        marginRight: any;
        verticalAlign: string;
        width: any;
    };
    nameLoading: {
        display: string;
        verticalAlign: string;
        width: string;
    };
    labelLoading: {
        margin: string;
        width: string;
    };
    priceLoading: {
        width: string;
    };
    flightHeader: {
        alignItems: string;
        display: string;
        height: number;
        justifyContent: string;
    };
    flightHighlight: {
        "&:hover": {
            background: string;
        };
        height: number;
        display: string;
        padding: number;
        border: string;
        borderRadius: number;
        width: string;
        background: string;
    };
    columnLine: {
        borderLeft: string;
        maxWidth: string;
    };
    highlightCell: {
        background: string;
    };
    highlightTitleStops: {
        background: string;
        borderRadius: string;
    };
    slider: {
        width: string;
        flexGrow: number;
        "& .slick-slider": {
            position: string;
        };
        "& .slick-prev": {
            background: string;
            borderRadius: string;
            boxShadow: string;
            height: number;
            width: number;
            left: string;
        };
        "& .slick-next": {
            background: string;
            borderRadius: string;
            boxShadow: string;
            height: number;
            width: number;
            right: number;
        };
        "& .slick-track": {
            marginLeft: number;
            display: string;
        };
        "& .slick-list": {
            padding: string;
            overflow: string;
        };
        "& .slick-disabled": {
            display: string;
        };
    };
};
