export function styles(theme: any): {
    root: {
        [x: number]: {
            borderRadius: string;
            maxHeight: string;
            top: string;
            position: string;
            bottom?: undefined;
            left?: undefined;
            height?: undefined;
            overflow?: undefined;
            right?: undefined;
        } | {
            borderRadius: number;
            bottom: number;
            left: number;
            height: string;
            overflow: string;
            position: string;
            right: number;
            top: number;
            maxHeight?: undefined;
        };
        background: any;
        display: string;
        flexDirection: string;
        overflow: string;
        padding: number;
        transition: string;
        width: string;
        zIndex: any;
    };
    rootPkg: {
        [x: number]: {
            width: string;
        };
    };
    closed: {
        maxHeight: number;
    };
    boxResult: {
        borderTop: string;
        padding: string;
    };
    input: {
        fontSize: string;
    };
    inputPkg: {
        fontSize: string;
        padding: string;
    };
    inputPkgRight: {
        fontSize: string;
        padding: string;
        textAlign: string;
    };
    inputLabel: {
        lineHeight: string;
        marginTop: string;
    };
    inputLabelRight: {
        fontSize: string;
        lineHeight: string;
        marginTop: string;
        right: string;
        left: string;
    };
    list: {
        margin: number;
        padding: number;
    };
    listItem: {
        listStyle: string;
        paddingTop: string;
        paddingBottom: string;
        cursor: string;
    };
    listItemTitle: {
        color: any;
        padding: string;
    };
    name: {
        color: any;
        marginRight: any;
        verticalAlign: string;
    };
    adressHotel: {
        verticalAlign: string;
    };
    adress: {
        display: string;
        color: any;
    };
    date: {
        verticalAlign: string;
    };
    content: {
        display: string;
        marginLeft: any;
        overflow: string;
        textOverflow: string;
        verticalAlign: string;
        width: string;
        whiteSpace: string;
    };
    flexGrow: {
        flexGrow: number;
        paddingLeft: any;
        lineHeight: string;
        fontSize: string;
    };
    container: {
        position: string;
    };
    internalInput: {
        alignItems: string;
        display: string;
        height: string;
        padding: string;
        boxSizing: string;
    };
    flex: {
        display: string;
    };
    scrolling: {
        overflowY: string;
    };
    heightLimit: {
        maxHeight: string;
    };
    origin: {
        position: string;
    };
    iconAH: {
        background: any;
        borderRadius: string;
        color: any;
        left: string;
        position: string;
        top: string;
        transform: string;
        zIndex: any;
    };
    originField: {
        paddingRight: any;
        position: string;
    };
    destinyField: {
        paddingLeft: any;
        position: string;
    };
    labelIata: {
        top: string;
        left: string;
        position: string;
        lineHeight: string;
        color: any;
        letterSpacing: string;
    };
    labelIataRight: {
        top: string;
        right: string;
        position: string;
        lineHeight: string;
        color: any;
        letterSpacing: string;
    };
    labelWhite: {
        color: any;
    };
    sublistItem: {
        paddingLeft: any;
    };
    originInput: {
        "& input": {
            padding: string;
        };
    };
    destinyInput: {
        "& input": {
            padding: string;
            textAlign: string;
        };
    };
    nested: {
        paddingLeft: any;
    };
};
export default styles;
