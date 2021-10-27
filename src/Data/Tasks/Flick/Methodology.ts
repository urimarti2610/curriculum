import { KnowledgeType } from "../../../Helpers/KnowledgeType";
import Task from "../../../Models/Task";

export const setTasksFlickMethodology = (): Task[] => {
  const tasks = [
    new Task(
      "Reunión con Proveedores",
      "Reuniones con distintos proveedores para analizar el mercado, configurar las compras y negociar las tarifas."
    ),
    new Task(
      "Subcontratación de Servicios",
      "Buscar las mejores empresas para los servicios que se subcontrataban. Tales como anuncios online, generación de contenido para el Blog, Social Media...",
      false
    ),
  ];
  tasks.forEach((v) => v.setType(KnowledgeType.METHODOLOGY));
  return tasks;
};
