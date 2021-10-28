import React from "react"
import { IUser } from "../../Interfaces/React/User"
import { ButtonAge } from "../_fragments/ButtonAge"

export const Birthday = (props: IUser) => {
    const [user] = React.useState(props.user)
    return <p className="flex align-center w-100">{user.birthday} <ButtonAge open={false} age={user.age} /></p>
}