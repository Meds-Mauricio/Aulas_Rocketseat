/// <reference types="react" />
import PropTypes from "prop-types";
declare const _default: {
    ({ children, testId, isOpen, onClose }: {
        children: any;
        testId: any;
        isOpen: any;
        onClose: any;
    }): JSX.Element;
    defaultProps: {
        testId: string;
        children: JSX.Element;
        onClose: () => null;
    };
    propTypes: {
        isOpen: PropTypes.Validator<boolean>;
        testId: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactElementLike>;
        onClose: PropTypes.Requireable<(...args: any[]) => any>;
    };
};
export default _default;
