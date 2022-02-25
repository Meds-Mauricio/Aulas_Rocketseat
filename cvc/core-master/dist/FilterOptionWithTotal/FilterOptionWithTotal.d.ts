/// <reference types="react" />
import PropTypes from "prop-types";
declare const _default: {
    ({ filter, items, sufix, onChange, isMobile, className, noModal, label, open, onOpen, onClose, onApply, onReset, onActive, height, }: {
        filter: any;
        items: any;
        sufix: any;
        onChange: any;
        isMobile: any;
        className: any;
        noModal: any;
        label: any;
        open: any;
        onOpen: any;
        onClose: any;
        onApply: any;
        onReset: any;
        onActive: any;
        height: any;
    }): JSX.Element;
    defaultProps: {
        open: boolean;
        className: undefined;
        isMobile: boolean;
        sufix: string;
        items: never[];
        noModal: boolean;
        onOpen: () => void;
        onApply: () => void;
        onReset: () => void;
        onChange: () => void;
    };
    propTypes: {
        open: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string | object>;
        items: PropTypes.Requireable<(object | null | undefined)[]>;
        isMobile: PropTypes.Requireable<boolean>;
        sufix: PropTypes.Requireable<string>;
        noModal: PropTypes.Requireable<boolean>;
        label: PropTypes.Validator<string>;
        onOpen: PropTypes.Requireable<(...args: any[]) => any>;
        onApply: PropTypes.Requireable<(...args: any[]) => any>;
        onReset: PropTypes.Requireable<(...args: any[]) => any>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
    };
};
export default _default;
