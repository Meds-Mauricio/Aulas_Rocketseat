export function styles(theme: any): {
    root: {
        [x: number]: {
            borderRadius: string;
            bottom: number;
            left: number;
            position: string;
            right: number;
            transition: string;
            zIndex: any;
        };
    };
    overlay: {
        zIndex: any;
    };
    closed: {
        [x: number]: {
            paddingBottom: number;
        };
    };
    closedContent: {
        height: number;
        transition: string;
        overflow: string;
    };
    openedContent: {
        height: string;
        transition: string;
    };
    header: {
        marginBottom: any;
    };
    icon: {
        float: string;
    };
    iconActive: {
        transform: string;
        transition: string;
    };
};
