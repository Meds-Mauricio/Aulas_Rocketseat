declare type DataLayer = {
    event: string;
    category: string;
    action: string;
    label: string;
};
declare const useGa: () => {
    saveOnGa: (dataLayer: DataLayer) => Promise<void>;
};
export default useGa;
