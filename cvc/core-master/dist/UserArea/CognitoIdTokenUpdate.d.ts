declare function useLocalStorage(): {
    cognitoIdToken: string | null | undefined;
    deleteCognitoServiceProvider: () => void;
};
export default useLocalStorage;
