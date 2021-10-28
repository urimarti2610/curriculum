import React from "react";
import { IUser } from "../../Interfaces/React/User";

export const Contact = (props: IUser) => {
  const [user] = React.useState(props.user);
  return (
    <ul>
      <li>
        <a href={`tel:${user.phone}`}>{user.phone}</a>
      </li>
      <li>
        <a href={`mailto:${user.email}`}>{user.email}</a>
      </li>
      <li>
        <a target="_blank" href={user.website}>
          Página Web
        </a>
      </li>
      <li>
        <a target="_blank" href={user.linkedin}>
          LinkedIN
        </a>
      </li>
    </ul>
  );
};
