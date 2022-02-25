export function styles(theme: any): {
    root: {
        border: string;
        borderRadius: any;
        boxShadow: any;
        cursor: string;
        overflow: string;
        padding: any;
        position: string;
        "& button": {
            display: string;
        };
        "&:hover": {
            borderColor: any;
            "& .title": {
                color: any;
            };
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
        padding: any;
    };
    typeList: {
        display: string;
    };
    content: {
        display: string;
        flexDirection: string;
        padding: string;
        position: string;
        width: string;
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
    mealIcon: {
        boxSizing: string;
        padding: string;
    };
    title: {
        display: string;
        marginTop: any;
    };
    footer: {
        [x: number]: {
            left: number;
            position: string;
            right: number;
            marginTop?: undefined;
            marginLeft?: undefined;
            marginRight?: undefined;
        } | {
            marginTop: any;
            marginLeft: number;
            marginRight: number;
            left?: undefined;
            position?: undefined;
            right?: undefined;
        };
        borderTop: string;
        bottom: number;
        padding: string;
        textAlign: string;
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
        maxWidth: string;
        minWidth: string;
        position: string;
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
        height: string;
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
        margin: string;
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
    info: {
        alignItems: string;
        display: string;
        flexDirection: string;
        justifyContent: string;
    };
    flight: {
        display: string;
        flexDirection: string;
    };
    flightInfo: {
        alignItems: string;
        display: string;
        justifyContent: string;
        width: string;
    };
    luggage: {
        color: any;
    };
    vooLabel: {
        color: string;
    };
};
