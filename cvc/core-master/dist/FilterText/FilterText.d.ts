export default FilterText;
declare function FilterText({ onApply, label, onReset, noModal, onChange, className, value, open, onOpen, onClose, onActive, height, }: {
    onApply: any;
    label: any;
    onReset: any;
    noModal: any;
    onChange: any;
    className: any;
    value: any;
    open: any;
    onOpen: any;
    onClose: any;
    onActive: any;
    height: any;
}): JSX.Element;
declare namespace FilterText {
    namespace defaultProps {
        const noModal: boolean;
        const className: undefined;
        const open: boolean;
        const value: string;
        function onOpen(): void;
        function onClose(): void;
        function onApply(): void;
        function onReset(): void;
        function onChange(): void;
        function onActive(): void;
    }
    namespace propTypes {
        export const label: PropTypes.Validator<string>;
        const noModal_1: PropTypes.Requireable<boolean>;
        export { noModal_1 as noModal };
        const className_1: PropTypes.Requireable<string | object>;
        export { className_1 as className };
        const value_1: PropTypes.Requireable<string>;
        export { value_1 as value };
        const open_1: PropTypes.Requireable<boolean>;
        export { open_1 as open };
        const onApply_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onApply_1 as onApply };
        const onReset_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onReset_1 as onReset };
        const onChange_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onChange_1 as onChange };
        const onOpen_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onOpen_1 as onOpen };
        const onClose_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onClose_1 as onClose };
        const onActive_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onActive_1 as onActive };
    }
}
import PropTypes from "prop-types";
