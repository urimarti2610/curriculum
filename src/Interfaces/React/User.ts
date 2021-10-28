import User from "../../Models/User";

export interface IUser {
    user: User
}

export interface IUserClick {
    user: User,
    parentClick: any
}