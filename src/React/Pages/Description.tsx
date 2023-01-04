import React from "react"
import { IUser } from "../../Interfaces/React/User"
import { Person } from "../Person/Person"
import { Page } from "./Page"

export const Description = (props: IUser) => (
  <Page id="description">
    <Person user={props.user} />
  </Page>
)
