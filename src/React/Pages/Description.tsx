import React from "react";
import { IUser } from "../../Interfaces/React/User";
import User from "../../Models/User";
import { Person } from "../Person/Person";
import { Title } from "../_fragments/Title";
import { Page } from "./Page";

export const Description = (props: IUser) => (
  <React.Fragment>
    <Page>
      <Title title={`${props.user.name} ${props.user.lastName}`} />
    </Page>
    <Page>
      <Person user={props.user} />
    </Page>
  </React.Fragment>
);
