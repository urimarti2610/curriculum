import React from "react";
import { IJobs } from "../../Interfaces/React/Job";
import { JobList } from "../Job/JobList";
import { Title } from "../_fragments/Title";
import { Page } from "./Page";

export const Jobs = (props: IJobs) => (
  <React.Fragment>
    <Page><Title title="Trabajos"/></Page>
    <JobList jobs={props.jobs} />
  </React.Fragment>
);
