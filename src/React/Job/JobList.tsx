import "./Job.scss";
import React from "react";
import { IJobs } from "../../Interfaces/React/Job";
import { JobElement } from "./JobElement";

export const JobList = (props: IJobs) => {
  const [jobs] = React.useState(props.jobs);

  const renderJobs = () =>
    jobs.map((job, index) => <JobElement key={index} job={job} />);

  return <div className="job-list">{renderJobs()}</div>;
};
