import { JobList } from "../../Helpers/JobList";
import { KnowledgeType } from "../../Helpers/KnowledgeType";
import { ITaskData } from "../../Interfaces/Data/ITaskData";

const type = KnowledgeType.METHODOLOGY;

const TasksBiciescapa: ITaskData[] = [
  {
    type,
    job: JobList.BICIESCAPA,
    name: "Planificación de Sprints",
    description:
      "He estado gestionando los sprints de nuestro equipo teniendo en cuenta las necesidades del cliente y de otros sectores de desarollo de la empresa.",
  },
  {
    type,
    job: JobList.BICIESCAPA,
    name: "Revisión de Tempo",
    description:
      "Una vez marcados los sprints cada día reviso el Tempo tanto mío como de mis compañeros para analizar la evolución del proyecto.",
  },
  {
    type,
    job: JobList.BICIESCAPA,
    name: "Reuniones Agile",
    description:
      "Preparo las reuniones Agiles que hacemos cada día para que no quede nada en el aire y poder solucionar todo lo que sea necesario lo antes posible.",
  },
  {
    type,
    job: JobList.BICIESCAPA,
    name: "Revisión de Código",
    description:
      "Reviso siempre el código tanto mío como de mis compañeros una vez se termina el sprint para detectar o mejoras o errores que puedan haber.",
  },
];

export const TasksMethodologyData: ITaskData[] = [...TasksBiciescapa];
