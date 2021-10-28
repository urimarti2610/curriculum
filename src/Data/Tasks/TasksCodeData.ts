import { JobList } from "../../Helpers/JobList";
import { KnowledgeType } from "../../Helpers/KnowledgeType";
import { ITaskData } from "../../Interfaces/Data/ITaskData";

const type = KnowledgeType.CODE;

const TasksBiciescapa: ITaskData[] = [
  {
    type,
    name: "Desarrollo de módulos para Prestashop",
    description:
      "He desarrollado unos 200 módulos distintos para el e-commerce hecho en PrestaShop. Algunos de muy sencillos y otros muy complejos como ahora la creación de un TPV o punto de venta para las tiendas del negocio",
    job: JobList.BICIESCAPA,
  },
  {
    type,
    name: "Creación de la plantilla del e-commerce",
    description:
      "A partir de una plantilla base de PrestaShop he creado la plantilla que hay ahora mismo en biciescapa.com. Consiguiendo muy buenos resultados de optimización y de SEO según google.",
    job: JobList.BICIESCAPA,
  },
  {
    type,
    name: "Integración del e-commerce y ERP",
    description:
      "He creado un sistema de integración con PrestaShop y el ERP con el que se sincronizan los stocks de los produtos, los pedidos y los clientes.",
    job: JobList.BICIESCAPA,
    liked: false,
  },
  {
    type,
    name: "Google Tag Manager",
    description:
      "He configurado el Google Tag Manager para poder realizar el seguimiento desde Google Analytics y el Píxel de Facebook consiguiendo la máxima información y fiabilidad de las estadísticas.",
    job: JobList.BICIESCAPA,
    liked: false,
  },
  {
    type,
    name: "Procesador de Productos",
    description:
      "He programado una aplicación para crear de forma sencilla los productos al e-commerce y al ERP de forma simultánea. Los proveedores nos hacen llegar sus archivos .csv, .xlsx... y a través de este procesador se maquetan automáticamente para subirlos automáticamente.",
    job: JobList.BICIESCAPA,
    liked: false,
  },
];

const TasksFlick: ITaskData[] = [
  {
    type,
    name: "Desarrollo de módulos para Prestashop",
    description:
      "He desarrollado unos 30 módulos distintos para el e-commerce hecho en PrestaShop la mayoría bastante sencillos.",
    job: JobList.FLICK,
  },
  {
    type,
    name: "Creación de la plantilla del e-commerce",
    description:
      "Creación desde cero de la plantilla que había en aquel entonces a la web de flickhockey.com siguiendo el patrón de las necesidades.",
    job: JobList.FLICK,
  },
  {
    type,
    name: "Integración del e-commerce y ERP",
    description:
      "Creación de una aplicación para importar los pedidos y clientes desde PrestaShop al ERP",
    job: JobList.FLICK,
  },
  {
    type,
    name: "Google Analytics",
    description:
      "Configuración y parametrización de Google Analytics dentro de la página web y en la misma plataforma de Google.",
    job: JobList.FLICK,
    liked: false,
  },
];


export const TasksCodeData: ITaskData[] = [...TasksBiciescapa, ...TasksFlick];