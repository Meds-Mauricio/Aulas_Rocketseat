declare const useReservationsFromTabs: () => {
    idToken: string;
    getIdToken: () => Promise<string>;
};
export default useReservationsFromTabs;
