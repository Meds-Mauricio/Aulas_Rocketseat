export default function configAws(config: any, hosts: any): {};
export interface configAmplifyAws {
    region: string;
    userPoolId: string;
    userPoolWebClientId: string;
    domain: string;
}
export declare function Redirect(hosts?: Array<string>): string | undefined;
