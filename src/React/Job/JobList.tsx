import React from "react"
import { IJobs } from "../../Interfaces/React/Job"
import { JobElement } from "./JobElement"

export const JobList = (props: IJobs) => (
  <React.Fragment>
    { props.jobs.map((job, index) => <JobElement key={index} job={job} />) }
  </React.Fragment>
)
