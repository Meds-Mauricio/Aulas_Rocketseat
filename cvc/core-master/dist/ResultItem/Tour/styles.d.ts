export function styles(theme: any): {
    root: {
        borderRadius: any;
        boxShadow: any;
        overflow: string;
        padding: any;
        position: string;
        "& button": {
            display: string;
        };
        "&:hover": {
            border: string;
            "& button": {
                display: string;
            };
        };
    };
    rootLoading: {
        boxShadow: any;
        "&:hover": {
            borderColor: string;
        };
    };
    isActive: {
        borderColor: any;
    };
    loading: {
        cursor: string;
        height: string;
        padding: any;
    };
    relative: {
        borderRadius: any;
        overflow: string;
        position: string;
    };
    package: {
        "&:hover": {
            borderColor: any;
        };
    };
    rootList: {
        height: string;
        boxSizing: string;
        padding: string;
        "&:hover": {
            padding: string;
        };
    };
    typeList: {
        display: string;
        height: string;
        padding: string;
    };
    contentColumn: {
        display: string;
        flexDirection: string;
    };
    content: {
        display: string;
        padding: string;
        position: string;
        width: string;
        marginRight: string;
        "& > $contentColumn:first-child": {
            width: string;
        };
        "& > $contentColumn:nth-child(2)": {
            width: string;
        };
    };
    img: {
        display: string;
        left: string;
        maxWidth: string;
        minHeight: string;
        minWidth: string;
        position: string;
        transform: string;
        top: string;
    };
    arrows: {
        background: string;
        border: string;
        color: any;
        cursor: string;
        outline: string;
        padding: number;
        position: string;
        transform: string;
        top: string;
        zIndex: any;
    };
    arrowLeft: {
        left: any;
    };
    arrowRight: {
        right: any;
    };
    title: {
        display: string;
        marginTop: any;
        whiteSpace: string;
        overflow: string;
        textOverflow: string;
    };
    footer: {
        [x: number]: {
            position: string;
        };
        borderTop: string;
        bottom: number;
        left: number;
        right: number;
        padding: string;
        textAlign: string;
        height: string;
    };
    footerItem: {
        "& + &": {
            marginLeft: number;
            "&:before": {
                borderLeft: string;
                content: string;
                display: string;
                height: string;
                marginRight: number;
                verticalAlign: string;
            };
        };
    };
    priceContainer: {
        textAlign: string;
        marginTop: string;
    };
    imgContainerCard: {
        display: string;
        height: string;
        marginLeft: number;
        marginTop: number;
        position: string;
        width: string;
        borderRadius: string;
        overflow: string;
        "& .slick-list": {
            borderRadius: string;
            "-webkit-border-radius": string;
        };
    };
    imgContainerList: {
        height: string;
        position: string;
        padding: any;
        paddingRight: string;
        width: string;
        "& .slick-list": {
            borderRadius: string;
            "-webkit-border-radius": string;
        };
    };
    imgWrapper: {
        background: any;
        display: string;
        height: string;
        overflow: string;
        position: string;
    };
    imgWrapperList: {
        borderRadius: any;
        "-webkit-border-radius": string;
    };
    overlay: {
        background: any;
        borderRadius: any;
        "-webkit-border-radius": string;
        bottom: number;
        content: string;
        left: number;
        position: string;
        right: number;
        top: number;
        zIndex: any;
    };
    notAvaliableImg: {
        filter: string;
    };
    subtitle: {
        display: string;
        marginTop: any;
        "& strong": {
            color: any;
        };
    };
    loadingContent: {
        marginTop: any;
    };
    loadingPrice: {
        marginTop: any;
    };
    topTag: {
        left: any;
        position: string;
        top: any;
        zIndex: any;
    };
    favorite: {
        color: any;
        cursor: string;
        position: string;
        right: any;
        top: any;
    };
    favoriteList: {
        color: any;
    };
    stars: {
        color: any;
        marginRight: any;
    };
    tripAdvisor: {
        margin: string;
        width: string;
    };
    tripAdvisorList: {
        margin: string;
        minHeight: string;
        width: string;
    };
    discountCard: {
        position: string;
        right: string;
        top: string;
    };
    discountList: {
        width: string;
    };
    infoDiscount: {
        display: string;
        justifyContent: string;
        marginTop: string;
    };
    info: {
        alignItems: string;
        display: string;
        flexDirection: string;
        justifyContent: string;
    };
    rate: {
        display: string;
    };
    btnDetalhe: {
        display: string;
        marginTop: string;
    };
    viewMore: {
        color: any;
        display: string;
        height: string;
        padding: number;
        fontSize: string;
        marginLeft: string;
        left: string;
    };
    containerTotalAvaliationRow: {
        display: string;
        flexWrap: string;
        flexDirection: string;
        width: string;
    };
    containerTotalAvaliation: {
        display: string;
        flexWrap: string;
    };
    totalAvaliation: {
        display: string;
    };
    totalPeople: {
        textAlign: string;
        position: string;
    };
    attributesContent: {
        padding: string;
        "& $rate": {
            margin: string;
        };
    };
    trip: {
        marginTop: string;
        display: string;
    };
};
