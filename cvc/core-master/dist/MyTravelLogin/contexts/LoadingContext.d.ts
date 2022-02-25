import React from "react";
interface ILoadingContext {
    loading: boolean;
    setLoading(isLoading: boolean): void;
}
declare const LoadingProvider: React.FC;
declare function useLoadingContext(): ILoadingContext;
export { LoadingProvider, useLoadingContext };
