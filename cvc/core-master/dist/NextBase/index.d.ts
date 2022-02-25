/// <reference types="react" />
export declare function GTMNoScript(): JSX.Element;
export default function withNextBasePage(Header: any, App: any): ({ brand, hostname, ...otherProps }: {
    [x: string]: any;
    brand: any;
    hostname: any;
}) => JSX.Element;
export declare function withNextGetServerSideProps(contextApiUrl?: string, fnAdditionalProps?: (ctx: any) => any): (context: any) => Promise<{
    props: any;
}>;
