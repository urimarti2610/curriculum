import "./Contact.scss"
import { faCodeBranch, faEnvelope, faExternalLinkAlt, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { IUser } from "../../Interfaces/React/User"

export const Contact = (props: IUser) => {
  const [user] = React.useState(props.user)
  return (
    <ul id="contact">
      <li>
        {user.birthday} <small>({user.age} años)</small>
      </li>
      <li>
        <a href={`tel:${user.phone}`}><FontAwesomeIcon icon={faPhone} /> {user.phone}</a>
      </li>
      <li>
        <a href={`mailto:${user.email}`}><FontAwesomeIcon icon={faEnvelope} /> {user.email}</a>
      </li>
      <li>
        <a target="_blank" href={user.website}><FontAwesomeIcon icon={faCodeBranch} /> Github</a>
      </li>
      <li>
        <a target="_blank" href={user.linkedin}><FontAwesomeIcon icon={faExternalLinkAlt} /> LinkedIN</a>
      </li>
    </ul>
  )
}
