export default Header;
declare function Header({ small, product, user, isMobile, menuSurrogateObject }: {
    small: any;
    product: any;
    user: any;
    isMobile: any;
    menuSurrogateObject: any;
}): JSX.Element;
declare namespace Header {
    namespace propTypes {
        const user: PropTypes.Requireable<object>;
        const isMobile: PropTypes.Requireable<boolean>;
        const small: PropTypes.Requireable<boolean>;
        const product: PropTypes.Requireable<string>;
        const menuSurrogateObject: PropTypes.Requireable<object>;
    }
}
import PropTypes from "prop-types";
