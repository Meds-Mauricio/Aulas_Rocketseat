import React, { ReactNode } from "react";
interface ITypography {
    classes: {
        root: string;
    };
    className?: string;
    children: ReactNode;
    type: string;
    onClick?: (e: any) => void;
    style?: any;
    key?: string;
}
declare const _default: React.ComponentType<Pick<ITypography, "className" | "children" | "type" | "onClick" | "style" | "key"> & import("@material-ui/styles/withStyles/withStyles").StyledComponentProps<"root" | "headline1" | "headline2" | "headline3" | "headline4" | "headline5" | "headline6" | "body1regular" | "body2regular" | "body1semibold" | "body2semibold" | "subtitle" | "captionregular" | "captionsemibold">>;
export default _default;
