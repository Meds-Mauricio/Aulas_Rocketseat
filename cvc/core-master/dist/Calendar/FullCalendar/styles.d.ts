export function styles(theme: any): {
    container: {
        [x: number]: {
            borderRadius: string;
            boxShadow: any;
        };
        background: any;
        cursor: string;
    };
    containerDates: {
        position: string;
        display: string;
    };
    calendar: {
        [x: number]: {
            background: any;
            bottom: number;
            left: number;
            height: string;
            overflow: string;
            position: string;
            right: number;
            top: number;
            padding?: undefined;
        } | {
            height: string;
            left: string;
            padding: string;
            position: string;
            top: string;
            background?: undefined;
            bottom?: undefined;
            overflow?: undefined;
            right?: undefined;
        };
        overflow: string;
        transition: string;
        zIndex: any;
    };
    closed: {
        height: number;
    };
    header: {
        [x: number]: {
            flexDirection: string;
            cursor: string;
            alignItems?: undefined;
        } | {
            alignItems: string;
            flexDirection?: undefined;
            cursor?: undefined;
        };
        display: string;
        justifyContent: string;
        padding: any;
        margin: any;
        borderBottom: string;
    };
    headerMob: {
        [x: number]: {
            flexDirection: string;
            cursor: string;
            alignItems?: undefined;
        } | {
            alignItems: string;
            flexDirection?: undefined;
            cursor?: undefined;
        };
        display: string;
        justifyContent: string;
    };
    title: {
        [x: number]: {
            alignItems: string;
            display: string;
            paddingBottom: any;
            cursor: string;
            "&:after": {
                borderTop: string;
                bottom: number;
                content: string;
                left: number;
                position: string;
                right: number;
            };
        };
        color: any;
        fontWeight: string;
    };
    icon: {
        marginRight: any;
    };
    itensHeader: {
        display: string;
        flexGrow: number;
        flexDirection: string;
        justifyContent: string;
    };
    itensHeaderMob: {
        display: string;
        flexGrow: number;
        flexDirection: string;
        justifyContent: string;
        borderBottom: string;
        padding: any;
    };
    containerBtn: {
        marginRight: string;
    };
    calendarIcon: {
        stroke: string;
        fill: string;
        width: string;
        color: string;
        marginLeft: string;
    };
    buttonClear: {
        height: string;
        marginTop: string;
        fontWeight: string;
        marginBottom: any;
        minWidth: number;
        padding: number;
        backgroundColor: string;
        color: any;
        "&:hover": {
            backgroundColor: string;
        };
    };
    dates: {
        [x: number]: {
            marginTop: any;
            width?: undefined;
            marginLeft?: undefined;
            marginRight?: undefined;
        } | {
            width: string;
            marginLeft: string;
            marginRight: string;
            marginTop?: undefined;
        } | {
            width: string;
            marginTop?: undefined;
            marginLeft?: undefined;
            marginRight?: undefined;
        };
        display: string;
        boxSizing: string;
        borderRadius: string;
        border: string;
        marginBottom: any;
    };
    datesMob: {
        [x: number]: {
            width: string;
            marginLeft?: undefined;
            marginRight?: undefined;
        } | {
            width: string;
            marginLeft: string;
            marginRight: string;
        };
        display: string;
        boxSizing: string;
    };
    datesItem: {
        flex: number;
    };
    dateInput: {
        padding: number;
    };
    content: {
        [x: number]: {
            height: string;
            position: string;
            width: string;
        } | {
            width: string;
            height?: undefined;
            position?: undefined;
        };
    };
    footer: {
        background: any;
        boxShadow: any;
        bottom: number;
        opacity: number;
        padding: any;
        position: string;
        transition: string;
        width: string;
        boxSizing: string;
    };
    showFooter: {
        opacity: number;
        position: string;
    };
    footerContainer: {
        display: string;
        margin: string;
        alignItems: string;
        borderTop: string;
        paddingTop: string;
        paddingBottom: string;
    };
    footerDayCounter: {
        display: string;
        justifyContent: string;
        flexGrow: string;
        color: string;
    };
    footerConfirmButton: {
        display: string;
        justifyContent: string;
    };
    btnApply: {
        height: string;
        minWidth: number;
        borderRadius: string;
    };
    input: {
        fontSize: string;
        borderRadius: number;
    };
    inputInside: {
        fontSize: string;
        borderRadius: number;
    };
    inputMobile: {
        fontSize: string;
    };
    inputRight: {
        borderTopRightRadius: string;
        borderBottomRightRadius: string;
        background: string;
        width: string;
    };
    inputLeft: {
        borderTopLeftRadius: string;
        borderBottomLeftRadius: string;
        background: string;
        width: string;
    };
    rootInput: {
        padding: string;
    };
    separator: {
        borderRight: string;
    };
    dateSeparator: {
        borderRight: string;
        marginTop: string;
        marginBottom: string;
    };
    inputDate: {
        padding: string;
        color: string;
        fontFamily: string;
        "&::placeholder": {
            color: string;
            fontWeight: string;
        };
    };
    inputRadius: {
        borderRadius: string;
        background: string;
    };
    inputRadiusMobile: {
        borderRadius: string;
        background: string;
    };
};
