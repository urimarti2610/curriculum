import { JobList } from "../../Helpers/JobList"
import { KnowledgeType } from "../../Helpers/KnowledgeType"
import { ITaskData } from "../../Interfaces/Data/ITaskData"

const type = KnowledgeType.DIRECTION

const TasksBiciescapa: ITaskData[] = []

const TasksSauc: ITaskData[] = [
  {
    type,
    job: JobList.SAUC,
    name: "Gestión del Personal",
    description:
      "Gestión de las solicitudes de trabajo, de las entrevesitas, de la contratación del personal necesario para la cooperativa.",
  },
  {
    type,
    job: JobList.SAUC,
    name: "Administración del negocio",
    description:
      "Gestión de presupuestos y financiación de la inversión de la cooperativa",
  },
]

const TasksFlick: ITaskData[] = [
  {
    type,
    job: JobList.FLICK,
    name: "Reunión con Proveedores",
    description:
      "Reuniones con distintos proveedores para analizar el mercado, configurar las compras y negociar las tarifas.",
  },
  {
    type,
    job: JobList.FLICK,
    name: "Subcontratación de Servicios",
    description:
      "Buscar las mejores empresas para los servicios que se subcontrataban. Tales como anuncios online, generación de contenido para el Blog, Social Media...",
    liked: false,
  },
]

export const TasksDirectionData: ITaskData[] = [
  ...TasksBiciescapa,
  ...TasksFlick,
  ...TasksSauc,
]
