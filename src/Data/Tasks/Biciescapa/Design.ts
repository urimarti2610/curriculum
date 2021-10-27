import { KnowledgeType } from "../../../Helpers/KnowledgeType";
import Task from "../../../Models/Task";

export const setTasksBiciescapaDesign = (): Task[] => {
  const tasks = [
    new Task(
      "Creación de Newsletters",
      "He diseñado todos los newsletters de la empresa desde que entré en la tienda. Debido al gran volumen de trabajo que he tenido hemos dejado de enviarlos.",
      false
    ),
    new Task(
      "Creación de Bánners",
      "He creado muchos bánners para la página web, para la tienda y para anuncios publicitarios tanto online como físicos.",
      false
    ),
  ];
  tasks.forEach((v) => v.setType(KnowledgeType.DESIGN));
  return tasks;
};
