import User from "../../Models/User";

export interface IBody {
    bodyClass: string,
    user: User
}

export interface IClick {
    parentClick: any
}

export interface IChildren {
    children: any
}

export interface ITitle {
    title: string
}