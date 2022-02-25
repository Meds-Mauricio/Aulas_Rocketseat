import React from "react";
interface ILink {
    classes: {
        link: string;
        disabled: string;
    };
    href: string;
    className?: string;
    target?: string;
    disabled?: boolean;
    children: JSX.Element[] | JSX.Element | string;
    onClick?: () => void;
}
declare const _default: React.ComponentType<Pick<ILink, "className" | "children" | "onClick" | "disabled" | "target" | "href"> & import("@material-ui/styles/withStyles/withStyles").StyledComponentProps<"disabled" | "link">>;
export default _default;
