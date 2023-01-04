import { IUser } from "../../Interfaces/React/User"
import React from "react"
import { Name } from "./Name"
import { Contact } from "./Contact"

export const Person = (props: IUser) => {
  const [user] = React.useState(props.user)

  return (
    <React.Fragment>
      <Name user={user} />
      <div id="person">
        <Contact user={user} />
        <div dangerouslySetInnerHTML={{ __html: user.description }}/>
      </div>
    </React.Fragment>
  )
}
