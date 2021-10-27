import IUser from "../Interfaces/IUser"
import React from 'react'
import { ButtonAge } from "./ButtonAge"
import { Name } from "./Name"
import { Birthday } from "./Birthday"

export const Person = (props: IUser) => {
    const [user] = React.useState(props.user)

    return <React.Fragment>
        <Name user={user} />
        <Birthday user={user} />
        <li><a href={`tel:${user.phone}`}>{user.phone}</a></li>
        <li><a href={`mailto:${user.email}`}>{user.email}</a></li>
        <li><a target="_blank" href={user.website}>Página Web</a></li>
        <li><a target="_blank" href={user.linkedin}>LinkedIN</a></li>
    </React.Fragment>
}