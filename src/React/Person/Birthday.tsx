import React from "react"
import IUser from "../../Interfaces/IUser"
import { ButtonAge } from "./ButtonAge"

export const Birthday = (props: IUser) => {
    const [user] = React.useState(props.user)
    return <React.Fragment>
        {user.birthday} <ButtonAge open={false} age={user.age} />
    </React.Fragment>
}