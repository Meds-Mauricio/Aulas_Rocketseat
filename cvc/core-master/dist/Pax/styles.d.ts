export function styles(theme: any): {
    root: {
        [x: number]: {
            borderRadius: string;
            top: string;
            width: string;
            position: string;
            bottom?: undefined;
            height?: undefined;
            left?: undefined;
            overflow?: undefined;
            right?: undefined;
        } | {
            borderRadius: number;
            bottom: number;
            height: string;
            left: number;
            overflow: string;
            position: string;
            right: number;
            top: number;
            width?: undefined;
        };
        overflow: string;
        padding: number;
        transition: string;
        width: string;
        zIndex: any;
    };
    closed: {
        maxHeight: number;
    };
    container: {
        padding: string;
        cursor: string;
    };
    title: {
        borderBottom: string;
        boxSizing: string;
        display: string;
        fontWeight: string;
        lineHeight: number;
        margin: string;
        padding: any;
        width: string;
    };
    icon: {
        marginRight: any;
    };
    iconUser: {
        marginTop: any;
        marginRight: any;
    };
    subtitle: {
        color: any;
    };
    subtitlePax: {
        color: any;
    };
    section: {
        [x: number]: {
            marginBottom: string;
        };
        overflow: string;
        padding: string;
        "& + &": {
            borderTop: string;
            marginTop: any;
            paddingTop: any;
        };
    };
    sectionTitle: {
        display: string;
        marginBottom: any;
    };
    paxTitle: {
        margin: string;
    };
    list: {
        margin: number;
        padding: number;
        width: string;
    };
    listItem: {
        display: string;
        listStyle: string;
        justifyContent: string;
        alignItems: string;
        "& + &": {
            marginTop: any;
        };
    };
    listItemAge: {
        alignItems: string;
        borderTop: string;
        display: string;
        listStyle: string;
        justifyContent: string;
        marginTop: any;
        paddingTop: any;
        flexDirection: string;
    };
    liContainer: {
        listStyle: string;
    };
    content: {
        display: string;
        flexDirection: string;
        minWidth: string;
        paddingRight: any;
    };
    body: {
        marginTop: any;
        display: string;
        justifyContent: string;
        width: string;
    };
    flightClass: {
        margin: string;
        width: string;
        padding: number;
        "& + &": {
            margin: string;
        };
    };
    footer: {
        [x: number]: {
            bottom: any;
            opacity: number;
            position: string;
            transition: string;
            width: string;
            left: any;
        };
        display: string;
        justifyContent: string;
        marginTop: any;
        marginBottom: any;
        width: string;
    };
    footerClose: {
        [x: number]: {
            transition: string;
            opacity: number;
            position: string;
        };
    };
    btnLabel: {
        fontSize: string;
        padding: string;
        verticalAlign: string;
    };
    btn: {
        height: string;
        minWidth: number;
        padding: number;
    };
    btnApply: {
        color: any;
        height: string;
        minWidth: number;
        padding: number;
    };
    listTitle: {
        alignItems: string;
        borderTop: string;
        display: string;
        justifyContent: string;
        margin: string;
        paddingTop: any;
        color: any;
    };
    removeRoom: {
        background: string;
        border: string;
        cursor: string;
    };
    removeRoomText: {
        color: any;
    };
    margin: {
        margin: any;
    };
    ageSelect: {
        width: string;
    };
    ageContainer: {
        width: string;
    };
    select: {
        display: string;
        flex: number;
    };
    customTextPax: {
        "& > label": {
            transform: string;
        };
    };
    input: {
        fontSize: string;
    };
    optionsFlight: {
        marginTop: any;
    };
    spaceButton: {
        [x: number]: {
            marginBottom: string;
        };
    };
};
