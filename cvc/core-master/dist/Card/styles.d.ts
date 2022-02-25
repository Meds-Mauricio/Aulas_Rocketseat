export function styles(theme: any): {
    root: {
        [x: number]: {
            "&:before": {
                border: string;
                borderRadius: string;
                "-webkit-border-radius": string;
                bottom: number;
                content: string;
                left: number;
                position: string;
                right: number;
                top: number;
                zIndex: any;
                transition: string;
            };
            "&:hover:before": {
                borderColor: any;
            };
        };
        borderRadius: string;
        boxShadow: any;
        cursor: string;
        padding: any;
        position: string;
        "&:hover": {
            boxShadow: any;
            "& $img": {
                transform: string;
            };
        };
    };
    hotel: {
        "&:hover:before": {
            borderColor: any;
        };
    };
    air: {
        "&:hover:before": {
            borderColor: any;
        };
        "&:focus-visible:before": {
            borderColor: any;
        };
    };
    package: {
        "&:hover:before": {
            borderColor: any;
        };
    };
    car: {
        "&:hover:before": {
            borderColor: any;
        };
    };
    img: {
        display: string;
        left: string;
        position: string;
        transform: string;
        transition: string;
        top: string;
    };
    title: {
        display: string;
        height: string;
        marginTop: any;
        overflow: string;
        textOverflow: string;
        whiteSpace: string;
    };
    footer: {
        borderTop: string;
        margin: string;
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
    header: {
        height: string;
    };
    headerSmall: {
        height: string;
    };
    headerNoImg: {
        height: string;
    };
    priceContainer: {};
    priceLabel: {
        display: string;
        marginBottom: number;
    };
    imgContainer: {
        backgroundClip: string;
        borderRadius: string;
        "-webkit-border-radius": string;
        display: string;
        position: string;
        marginLeft: number;
        marginTop: number;
        width: string;
        "-webkit-mask-image": string;
    };
    imgContainerPromo: {
        background: any;
        display: string;
        height: string;
        overflow: string;
        position: string;
    };
    imgContainerPromoSmall: {
        background: any;
        display: string;
        height: string;
        overflow: string;
        position: string;
    };
    tagContainer: {
        position: string;
    };
    tag: {
        bottom: string;
        position: string;
        right: any;
    };
    subtitle: {
        display: string;
        color: any;
        height: string;
        overflow: string;
        textOverflow: string;
        whiteSpace: string;
    };
    date: {
        display: string;
        overflow: string;
        textOverflow: string;
        whiteSpace: string;
    };
    departure: {
        display: string;
    };
    arrival: {
        display: string;
    };
    totalDays: {
        marginRight: number;
    };
    loadingContent: {
        marginTop: any;
    };
    loadingPrice: {
        marginTop: any;
    };
    stars: {
        color: any;
    };
    break: {
        display: string;
    };
    icon: {
        marginRight: number;
    };
    item: {
        display: string;
        alignItems: string;
    };
    items: {
        display: string;
        alignItems: string;
        justifyContent: string;
        flexWrap: string;
    };
    itemIcon: {
        display: string;
        backgroundColor: any;
        borderRadius: string;
        padding: any;
        alignItems: string;
        justifyContent: string;
        marginRight: number;
        "& svg": {
            width: any;
            height: any;
        };
    };
    smallItemIcon: {
        display: string;
        backgroundColor: any;
        borderRadius: string;
        padding: any;
        alignItems: string;
        justifyContent: string;
        marginRight: number;
        "& svg": {
            width: number;
            height: number;
        };
    };
};
