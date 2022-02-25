export default OrderEngine;
declare function OrderEngine({ orders, dataSource, onOrdered, className }: {
    orders: any;
    dataSource: any;
    onOrdered: any;
    className: any;
}): JSX.Element;
declare namespace OrderEngine {
    const defaultProps: {};
    namespace propTypes {
        const orders: PropTypes.Requireable<any[]>;
        const onOrdered: PropTypes.Requireable<(...args: any[]) => any>;
        const className: PropTypes.Requireable<string>;
    }
}
import PropTypes from "prop-types";
