import { JobList } from "../../Helpers/JobList"
import { KnowledgeType } from "../../Helpers/KnowledgeType"
import { ITaskData } from "../../Interfaces/Data/ITaskData"

const type = KnowledgeType.DESIGN

const TasksBiciescapa: ITaskData[] = [
  {
    type,
    job: JobList.BICIESCAPA,
    name: "Creación de Newsletters",
    description:
      "He diseñado todos los newsletters de la empresa desde que entré en la tienda. Debido al gran volumen de trabajo que he tenido hemos dejado de enviarlos.",
    liked: false,
  },
  {
    type,
    job: JobList.BICIESCAPA,
    name: "Creación de Bánners",
    description:
      "He creado muchos bánners para la página web, para la tienda y para anuncios publicitarios tanto online como físicos.",
    liked: false,
  },
]

const TasksFlick: ITaskData[] = [
  {
    type,
    job: JobList.FLICK,
    name: "Creación de Newsletters",
    description:
      "Diseño y maquetación de todos los newsletters. Se mandaban 2 newsletters a la semana.",
    liked: false,
  },
  {
    type,
    job: JobList.FLICK,
    name: "Creación de Bánners",
    description:
      "Creación y publicación de todos los bánners, carteles y cartelería de la empresa. Tanto online como físico.",
    liked: false,
  },
]

const TasksSauc: ITaskData[] = [
  {
    type,
    job: JobList.SAUC,
    name: "Creación de Newsletters",
    description:
      "Diseño y maquetación de todos los newsletters.",
    liked: false,
  },
  {
    type,
    job: JobList.SAUC,
    name: "Creación de Bánners",
    description:
      "Creación y publicación de todos los bánners, carteles y cartelería de la empresa. Tanto online como físico.",
    liked: false,
  },
  {
    type,
    job: JobList.SAUC,
    name: "Creación de Rollups",
    description:
      "Diseño y montaje de distintos rollups que necesitó la cooperativa",
    liked: false,
  },
]

export const TasksDesignData: ITaskData[] = [...TasksBiciescapa, ...TasksFlick, ...TasksSauc]
