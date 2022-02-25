export default FilterMore;
declare function FilterMore({ isOpen, filters, onApply, isMobile, label, noModal, header, className, onActives, height, item, }: {
    isOpen: any;
    filters: any;
    onApply: any;
    isMobile: any;
    label: any;
    noModal: any;
    header: any;
    className: any;
    onActives: any;
    height: any;
    item: any;
}): JSX.Element;
declare namespace FilterMore {
    namespace defaultProps {
        function onApply(): void;
        function onActives(): void;
        const isOpen: boolean;
        const isMobile: boolean;
        const label: string;
        const noModal: boolean;
        const header: string;
        const filters: never[];
    }
    namespace propTypes {
        const isOpen_1: PropTypes.Requireable<boolean>;
        export { isOpen_1 as isOpen };
        const filters_1: PropTypes.Requireable<(PropTypes.InferProps<{
            type: PropTypes.Requireable<string>;
            label: PropTypes.Requireable<string>;
            field: PropTypes.Requireable<string>;
        }> | null | undefined)[]>;
        export { filters_1 as filters };
        const onActives_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onActives_1 as onActives };
        const onApply_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onApply_1 as onApply };
        const isMobile_1: PropTypes.Requireable<boolean>;
        export { isMobile_1 as isMobile };
        const label_1: PropTypes.Requireable<string>;
        export { label_1 as label };
        const noModal_1: PropTypes.Requireable<boolean>;
        export { noModal_1 as noModal };
        const header_1: PropTypes.Requireable<string>;
        export { header_1 as header };
    }
}
import PropTypes from "prop-types";
