import Job from "../../Models/Job";
import { setTasksBiciescapa } from "../Tasks/Biciescapa";

export const setBiciescapa = (): Job => {
  const j = new Job("Biciescapa");
  j.setPosition("IT Project Manager");
  j.setDescription("E-commerce de ciclismo líder del sector en España");
  j.setFrom("2018-07-01");
  j.setTasks(setTasksBiciescapa());
  return j;
};
