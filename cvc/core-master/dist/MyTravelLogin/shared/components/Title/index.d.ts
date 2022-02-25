import React, { ReactNode } from "react";
import { TypographyProps } from "@material-ui/core/Typography";
interface TitleProps extends TypographyProps {
    children: ReactNode;
}
declare const Title: React.FC<TitleProps>;
export default Title;
