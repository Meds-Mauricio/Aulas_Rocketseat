import React, { ReactNode } from "react";
import { TypographyProps } from "@material-ui/core/Typography";
interface SubTitleProps extends TypographyProps {
    children: ReactNode;
}
declare const SubTitle: React.FC<SubTitleProps>;
export default SubTitle;
