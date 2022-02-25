/// <reference types="react" />
interface IUserAreaInfo {
    userName: string;
    className: string;
    hiddenMyTravels?: boolean;
}
declare const UserAreaInfo: ({ userName, className, hiddenMyTravels }: IUserAreaInfo) => JSX.Element;
export default UserAreaInfo;
