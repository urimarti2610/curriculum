import Job from "../Models/Job";
import { setBiciescapa } from "./Jobs/Biciescapa";
import { setFlick } from "./Jobs/Flick";

export const getJobs = (): Job[] => {
  return [setBiciescapa(), setFlick()];
};
