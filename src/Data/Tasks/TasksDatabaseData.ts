import { JobList } from "../../Helpers/JobList"
import { KnowledgeType } from "../../Helpers/KnowledgeType"
import { ITaskData } from "../../Interfaces/Data/ITaskData"

const type = KnowledgeType.DATABASE

const TasksBiciescapa: ITaskData[] = [
  {
    type,
    job: JobList.BICIESCAPA,
    name: "Informes KPI Google DataStudio",
    description:
      "Desde el Google DataStudio he hecho diferentes informes para poder tener en un vistazo rápido los KPIs actualizados de forma automática. Cogiendo los datos de Analytics, Ads, Shopping y MySQL.",
    liked: false,
  },
]

const TasksFlick: ITaskData[] = [
  {
    type,
    job: JobList.FLICK,
    name: "Generación de Informes",
    description:
      "Desde el BackOffice de PrestaShop generé diferentes informes necesarios para el buen desarrollo del negocio.",
  },
  {
    type,
    job: JobList.FLICK,
    name: "Gestión del Catálogo ERP",
    description:
      "Creación de los productos al ERP, gestión de Precios y análisis de compras junto al CEO de la empresa",
    liked: false,
  },
  {
    type,
    job: JobList.FLICK,
    name: "Creación del Catálogo E-commerce",
    description:
      "Volcado masivo de los productos a través de CSV generados manualmente con herramientas propias. Además de subir todas las fotos - retocadas - al e-commerce.",
    liked: false,
  },
]

const TasksSauc: ITaskData[] = [
  {
    type,
    job: JobList.SAUC,
    name: "Base de Datos de Monitores",
    description:
      "Creación y mantenimiento de una base de datos con todos los monitores para gestión de sustituciones y contrataciones",
    liked: false,
  },
]


export const TasksDatabaseData: ITaskData[] = [
  ...TasksBiciescapa,
  ...TasksFlick,
  ...TasksSauc,
]
