import Task from "../../Models/Task";
import { setTasksFlickCode } from "./Flick/Code";
import { setTasksFlickDatabase } from "./Flick/Database";
import { setTasksFlickDesign } from "./Flick/Design";
import { setTasksFlickMethodology } from "./Flick/Methodology";

export const setTasksFlick = (): Task[] => {
  return [
    ...setTasksFlickCode(),
    ...setTasksFlickDatabase(),
    ...setTasksFlickDesign(),
    ...setTasksFlickMethodology(),
  ];
};
