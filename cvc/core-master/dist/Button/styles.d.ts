export function styles(theme: any): {
    root: {
        background: string;
        borderRadius: string;
        boxShadow: string;
        color: string;
        fontFamily: any;
        fontSize: string;
        height: string;
        minWidth: string;
        textTransform: string;
    };
    sizeLarge: {
        height: any;
        fontSize: string;
    };
    sizeSmall: {
        borderRadius: string;
        height: string;
        padding: string;
    };
    disabled: {
        background: string;
        color: string;
    };
    containedPrimary: {
        [x: number]: {
            "&:hover": {
                background: string;
            };
        };
        background: string;
        color: string;
    };
    textPrimary: {
        fontFamily: any;
        "&:hover": {
            background: string;
        };
    };
    containedSecondary: {
        [x: number]: {
            "&:hover": {
                background: string;
            };
        };
        background: string;
        color: string;
    };
    outlinedPrimary: {
        [x: number]: {
            "&:hover": {
                background: string;
                borderColor: string;
            };
        };
        background: string;
        borderColor: string;
        color: string;
    };
    outlinedSecondary: {
        [x: number]: {
            "&:hover": {
                background: string;
                borderColor: string;
            };
        };
        background: string;
        borderColor: string;
        color: string;
    };
    grouped1: {
        borderTopRightRadius: string;
        borderBottomRightRadius: string;
    };
    grouped2: {
        borderTopLeftRadius: string;
        borderBottomLeftRadius: string;
        borderLeft: string;
    };
    addRemovePrimary: {
        background: string;
        borderColor: string;
        borderRadius: string;
        color: string;
        height: string;
        minWidth: string;
        padding: string;
        width: string;
        "&:hover": {
            background: string;
            borderColor: string;
            color: string;
        };
    };
    addRemoveSecondary: {
        background: string;
        borderColor: string;
        borderRadius: string;
        color: string;
        height: string;
        minWidth: string;
        padding: string;
        width: string;
        "&:hover": {
            background: string;
            borderColor: string;
            color: string;
        };
    };
    nextPrev: {
        border: string;
        borderRadius: string;
        boxShadow: string;
        color: string;
        height: string;
        minWidth: string;
        padding: string;
        "&:hover": {
            background: string;
            border: string;
            color: string;
        };
    };
    play: {
        background: string;
        borderRadius: string;
        color: string;
        height: string;
        minWidth: string;
        width: string;
        "&:hover": {
            background: string;
        };
    };
    before: {
        marginLeft: any;
    };
    after: {
        marginRight: any;
    };
};
