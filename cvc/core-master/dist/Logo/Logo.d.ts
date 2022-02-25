export default Logo;
declare function Logo({ type, alt, className, ...props }: {
    [x: string]: any;
    type: any;
    alt: any;
    className: any;
}): JSX.Element;
declare namespace Logo {
    namespace defaultProps {
        const type: string;
        const className: string;
        const alt: string;
    }
    namespace propTypes {
        const type_1: PropTypes.Validator<string>;
        export { type_1 as type };
        const className_1: PropTypes.Requireable<string>;
        export { className_1 as className };
        const alt_1: PropTypes.Validator<string>;
        export { alt_1 as alt };
    }
}
import PropTypes from "prop-types";
