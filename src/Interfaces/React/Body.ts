import User from "../../Models/User"

export interface IBody {
    bodyClass: string,
    user: User
}

export interface IClick {
    parentClick: any
}

export interface IChildren {
    id: string
    children: any,
}

export interface ITitle {
    title: string
}

export interface IMenu {
    links: IMenuItem[]
}

export interface IMenuItem {
    id: string,
    name: string,
    active: boolean
}
