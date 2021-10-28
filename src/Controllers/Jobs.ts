import Job from "../Models/Job";
import { IobjectJob } from "../Interfaces/IobjectJob";
import { JobsData } from "../Data/JobsData";
import { getTasks } from "./Tasks";

export const getJobs = (): Job[] => {
  return JobsData.map((v) => setDataJob(v));
};

const setDataJob = (job: IobjectJob): Job => {
  const j = new Job(job.name);
  j.setPosition(job.position)
  j.setDescription(job.description)
  j.setFrom(job.from)
  j.setTo(job.to)
  j.setTasks(getTasks(job.name))
  return j;
};