import React from "react"
import { IUser } from "../../Interfaces/React/User"

export const Name = (props: IUser) => {
  const [user] = React.useState(props.user)
  return (
    <h1>
      {user.name} {user.lastName}
    </h1>
  )
}
