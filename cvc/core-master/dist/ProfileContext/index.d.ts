import React, { ReactNode } from "react";
import { IProfileContext } from "./types";
interface IProfileProvider {
    children: ReactNode;
}
declare const ProfileDataProvider: React.FC<IProfileProvider>;
declare function useProfileContext(): IProfileContext;
export { ProfileDataProvider, useProfileContext };
