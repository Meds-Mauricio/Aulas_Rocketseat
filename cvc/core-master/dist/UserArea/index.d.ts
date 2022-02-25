export default Header;
declare function Header({ user, lightTheme, className }: {
    user: any;
    lightTheme: any;
    className: any;
}): JSX.Element;
declare namespace Header {
    namespace propTypes {
        const user: PropTypes.Requireable<object>;
        const lightTheme: PropTypes.Requireable<boolean>;
        const className: PropTypes.Requireable<string>;
    }
}
import PropTypes from "prop-types";
