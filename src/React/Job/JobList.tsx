import React from "react";
import { IJobs } from "../../Interfaces/React/Job";
import { JobElement } from "./JobElement";
import { Page } from "../Pages/Page";

export const JobList = (props: IJobs) => (
  <React.Fragment>
    {props.jobs.map((job, index) => (
      <Page key={index}>
        <JobElement key={index} job={job} />
      </Page>
    ))}
  </React.Fragment>
);
