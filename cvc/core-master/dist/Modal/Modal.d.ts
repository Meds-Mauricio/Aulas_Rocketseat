declare var _default: React.ComponentType<Pick<Pick<{
    classes: any;
    onOpen: any;
    onClose: any;
    isOpen: any;
    title: any;
    children: any;
    isMobile?: boolean | undefined;
}, "isMobile"> & Pick<PropTypes.InferProps<{
    classes: PropTypes.Validator<object>;
    onOpen: PropTypes.Requireable<(...args: any[]) => any>;
    onClose: PropTypes.Requireable<(...args: any[]) => any>;
    isOpen: PropTypes.Requireable<boolean>;
    title: PropTypes.Requireable<string>;
    children: PropTypes.Requireable<object>;
}>, "classes" | "children" | "title" | "onClose" | "onOpen" | "isOpen">, "children" | "title" | "isMobile" | "onClose" | "onOpen" | "isOpen"> & import("@material-ui/styles/withStyles/withStyles").StyledComponentProps<"root" | "overlay" | "icon" | "header" | "closed" | "closedContent" | "openedContent" | "iconActive">>;
export default _default;
import PropTypes from "prop-types";
import React from "react";
