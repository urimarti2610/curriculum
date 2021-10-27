import Job from "../../Models/Job";
import { setTasksFlick } from "../Tasks/Flick";

export const setFlick = (): Job => {
  const j = new Job("Flick Hockey");
  j.setPosition("IT Project Manager");
  j.setDescription("E-commerce de hockey hierba líder del sector en España");
  j.setFrom("2011-07-01");
  j.setTo("2018-06-30");
  j.setTasks(setTasksFlick());
  return j;
};
