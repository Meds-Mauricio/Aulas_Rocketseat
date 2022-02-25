export default buttonStories;
export function Default(args: any): JSX.Element;
export namespace Default {
    namespace args {
        const color: string;
        const label: string;
        const size: string;
        const variant: string;
    }
}
declare namespace buttonStories {
    export const title: string;
    export { StaticBrandContainer as component };
}
import StaticBrandContainer from "../../storybook-utils/StaticBrandContainer";
