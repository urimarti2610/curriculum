import { KnowledgeType } from "../../../Helpers/KnowledgeType";
import Task from "../../../Models/Task";

export const setTasksFlickDatabase = (): Task[] => {
  const tasks = [
    new Task(
      "Generación de Informes",
      "Desde el BackOffice de PrestaShop generé diferentes informes necesarios para el buen desarrollo del negocio."
    ),
    new Task(
      "Gestión del Catálogo ERP",
      "Creación de los productos al ERP, gestión de Precios y análisis de compras junto al CEO de la empresa",
      false
    ),
    new Task(
      "Creación del Catálogo E-commerce",
      "Volcado masivo de los productos a través de CSV generados manualmente con herramientas propias. Además de subir todas las fotos - retocadas - al e-commerce.",
      false
    ),
  ];
  tasks.forEach((v) => v.setType(KnowledgeType.DATABASE));
  return tasks;
};
