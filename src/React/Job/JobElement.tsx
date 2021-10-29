import React from "react";
import { IJob } from "../../Interfaces/React/Job";
import { TaskList } from "../Task/TaskLikst";

export const JobElement = (props: IJob) => {
  const [job] = React.useState(props.job);
  return (
    <div className="job" data-aos="fade-up">
      <h3>{job.name}</h3>
      <h4>{job.position}</h4>
      <h5>{job.from} / {job.to.trim() === '' ? 'Actualmente' : job.to}</h5>
      <p>{job.description}</p>
      <h5>Trabajos realizados</h5>
      <TaskList tasks={job.tasks} />
    </div>
  );
};
