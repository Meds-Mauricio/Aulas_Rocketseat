export function styles(theme: any): {
    root: {
        display: string;
        padding: number;
    };
    item: {
        alignItems: string;
        background: any;
        borderRadius: string;
        display: string;
        height: string;
        justifyContent: string;
        listStyle: string;
        width: string;
        "& + &": {
            marginLeft: any;
        };
    };
};
