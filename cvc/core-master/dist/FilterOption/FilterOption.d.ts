export default FilterOption;
declare function FilterOption({ filter, items, sufix, onChange, isMobile, className, noModal, label, open, onOpen, onClose, onApply, onReset, onActive, height, }: {
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
declare namespace FilterOption {
    namespace defaultProps {
        const open: boolean;
        const className: undefined;
        const isMobile: boolean;
        const sufix: string;
        const items: never[];
        const noModal: boolean;
        function onOpen(): void;
        function onApply(): void;
        function onReset(): void;
        function onChange(): void;
    }
    namespace propTypes {
        const open_1: PropTypes.Requireable<boolean>;
        export { open_1 as open };
        const className_1: PropTypes.Requireable<string | object>;
        export { className_1 as className };
        const items_1: PropTypes.Requireable<(object | null | undefined)[]>;
        export { items_1 as items };
        const isMobile_1: PropTypes.Requireable<boolean>;
        export { isMobile_1 as isMobile };
        const sufix_1: PropTypes.Requireable<string>;
        export { sufix_1 as sufix };
        const noModal_1: PropTypes.Requireable<boolean>;
        export { noModal_1 as noModal };
        export const label: PropTypes.Validator<string>;
        const onOpen_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onOpen_1 as onOpen };
        const onApply_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onApply_1 as onApply };
        const onReset_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onReset_1 as onReset };
        const onChange_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onChange_1 as onChange };
    }
}
import PropTypes from "prop-types";
