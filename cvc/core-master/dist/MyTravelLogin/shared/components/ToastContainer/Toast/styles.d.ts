interface ContainerProps {
    type?: "success" | "error";
    isMobile: boolean;
}
declare const useStyles: (props: ContainerProps) => import("@material-ui/styles/withStyles").ClassNameMap<"root" | "container" | "toastWrapper" | "description" | "closeButton">;
export default useStyles;
