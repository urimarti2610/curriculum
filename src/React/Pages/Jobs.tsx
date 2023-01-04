import React from "react"
import { IJobs } from "../../Interfaces/React/Job"
import { JobList } from "../Job/JobList"
import { Title } from "../_fragments/Title"
import { Page } from "./Page"

export const Jobs = (props: IJobs) => (
  <Page id="jobs">
    <Title title="Trabajos"/>
    <JobList jobs={props.jobs} />
  </Page>
)
