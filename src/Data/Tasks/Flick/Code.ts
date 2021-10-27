import { KnowledgeType } from "../../../Helpers/KnowledgeType";
import Task from "../../../Models/Task";

export const setTasksFlickCode = (): Task[] => {
  const tasks = [
    new Task(
      "Desarrollo de módulos para Prestashop",
      "He desarrollado unos 30 módulos distintos para el e-commerce hecho en PrestaShop la mayoría bastante sencillos."
    ),
    new Task(
      "Creación de la plantilla del e-commerce",
      "Creación desde cero de la plantilla que había en aquel entonces a la web de flickhockey.com siguiendo el patrón de las necesidades."
    ),
    new Task(
      "Integración del e-commerce y ERP",
      "Creación de una aplicación para importar los pedidos y clientes desde PrestaShop al ERP"
    ),
    new Task(
      "Google Analytics",
      "Configuración y parametrización de Google Analytics dentro de la página web y en la misma plataforma de Google.",
      false
    ),
  ];
  tasks.forEach((v) => v.setType(KnowledgeType.CODE));
  return tasks;
};
