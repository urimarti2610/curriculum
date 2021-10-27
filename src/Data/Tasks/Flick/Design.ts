import { KnowledgeType } from "../../../Helpers/KnowledgeType";
import Task from "../../../Models/Task";

export const setTasksFlickDesign = (): Task[] => {
  const tasks = [
    new Task(
      "Creación de Newsletters",
      "Diseño y maquetación de todos los newsletters. Se mandaban 2 newsletters a la semana.",
      false
    ),
    new Task(
      "Creación de Bánners",
      "Creación y publicación de todos los bánners, carteles y cartelería de la empresa. Tanto online como físico.",
      false
    ),
  ];
  tasks.forEach((v) => v.setType(KnowledgeType.DESIGN));
  return tasks;
};
