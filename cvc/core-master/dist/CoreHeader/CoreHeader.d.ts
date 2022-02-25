export const HeaderHideBgContext: React.Context<boolean>;
export default CoreHeader;
import React from "react";
declare function CoreHeader({ small, product, user, isMobile, menuSurrogateObject, showCovidAlert }: {
    small: any;
    product: any;
    user: any;
    isMobile: any;
    menuSurrogateObject: any;
    showCovidAlert?: boolean | undefined;
}): JSX.Element;
declare namespace CoreHeader {
    namespace propTypes {
        const user: PropTypes.Requireable<object>;
        const isMobile: PropTypes.Requireable<boolean>;
        const showCovidAlert: PropTypes.Requireable<boolean>;
        const small: PropTypes.Requireable<boolean>;
        const product: PropTypes.Requireable<string>;
        const menuSurrogateObject: PropTypes.Requireable<object>;
    }
}
import PropTypes from "prop-types";
