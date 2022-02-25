export default Animate;
declare function Animate({ children, isOpen, onOpen, onClose }: {
    children: any;
    isOpen: any;
    onOpen: any;
    onClose: any;
}): any;
declare namespace Animate {
    namespace propTypes {
        const children: PropTypes.Validator<object>;
        const isOpen: PropTypes.Requireable<boolean>;
        const onOpen: PropTypes.Validator<(...args: any[]) => any>;
        const onClose: PropTypes.Validator<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";
