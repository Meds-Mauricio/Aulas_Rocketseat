export declare function getQueryContextData(contextApiUrl: string): any;
export declare class QueryContextData {
    private contextApiUrl;
    private contextData;
    constructor(contextApiUrl: string);
    private revalidateContextData;
    getContextData(): Promise<any>;
    private queryContextData;
}
