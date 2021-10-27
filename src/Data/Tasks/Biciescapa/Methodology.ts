import { KnowledgeType } from "../../../Helpers/KnowledgeType";
import Task from "../../../Models/Task";

export const setTasksBiciescapaMethodology = (): Task[] => {
  const tasks = [
    new Task(
      "Planificación de Sprints",
      "He estado gestionando los sprints de nuestro equipo teniendo en cuenta las necesidades del cliente y de otros sectores de desarollo de la empresa."
    ),
    new Task(
      "Revisión de Tempo",
      "Una vez marcados los sprints cada día reviso el Tempo tanto mío como de mis compañeros para analizar la evolución del proyecto."
    ),
    new Task(
      "Reuniones Agile",
      "Preparo las reuniones Agiles que hacemos cada día para que no quede nada en el aire y poder solucionar todo lo que sea necesario lo antes posible."
    ),
    new Task(
      "Revisión de Código",
      "Reviso siempre el código tanto mío como de mis compañeros una vez se termina el sprint para detectar o mejoras o errores que puedan haber."
    ),
  ];
  tasks.forEach((v) => v.setType(KnowledgeType.METHODOLOGY));
  return tasks;
};
