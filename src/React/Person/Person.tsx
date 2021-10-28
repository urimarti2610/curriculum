import { IUser } from "../../Interfaces/React/User";
import React from "react";
import { Name } from "./Name";
import { Birthday } from "./Birthday";
import { Contact } from "./Contact";

export const Person = (props: IUser) => {
  const [user] = React.useState(props.user);

  return (
    <React.Fragment>
      <Name user={user} />
      <Birthday user={user} />
      <Contact user={user} />
      <div
        className="justify"
        dangerouslySetInnerHTML={{ __html: user.description }}
      />
    </React.Fragment>
  );
};
