import Task from "../../Models/Task";
import { setTasksBiciescapaCode } from "./Biciescapa/Code";
import { setTasksBiciescapaDatabase } from "./Biciescapa/Database";
import { setTasksBiciescapaDesign } from "./Biciescapa/Design";
import { setTasksBiciescapaMethodology } from "./Biciescapa/Methodology";

export const setTasksBiciescapa = (): Task[] => {
  return [
    ...setTasksBiciescapaCode(),
    ...setTasksBiciescapaDatabase(),
    ...setTasksBiciescapaDesign(),
    ...setTasksBiciescapaMethodology(),
  ];
};
