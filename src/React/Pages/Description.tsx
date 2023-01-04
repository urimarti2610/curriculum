import React from "react";
import { IUser } from "../../Interfaces/React/User";
import { Person } from "../Person/Person";
import { Page } from "./Page";

export const Description = (props: IUser) => (
  <React.Fragment>
    <Page>
      <Person user={props.user} />
    </Page>
  </React.Fragment>
);
