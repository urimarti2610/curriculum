import { KnowledgeType } from "../../../Helpers/KnowledgeType";
import Task from "../../../Models/Task";

export const setTasksBiciescapaCode = (): Task[] => {
  const tasks = [
    new Task(
      "Desarrollo de módulos para Prestashop",
      "He desarrollado unos 200 módulos distintos para el e-commerce hecho en PrestaShop. Algunos de muy sencillos y otros muy complejos como ahora la creación de un TPV o punto de venta para las tiendas del negocio"
    ),
    new Task(
      "Creación de la plantilla del e-commerce",
      "A partir de una plantilla base de PrestaShop he creado la plantilla que hay ahora mismo en biciescapa.com. Consiguiendo muy buenos resultados de optimización y de SEO según google."
    ),
    new Task(
      "Integración del e-commerce y ERP",
      "He creado un sistema de integración con PrestaShop y el ERP con el que se sincronizan los stocks de los produtos, los pedidos y los clientes.",
      false
    ),
    new Task(
      "Google Tag Manager",
      "He configurado el Google Tag Manager para poder realizar el seguimiento desde Google Analytics y el Píxel de Facebook consiguiendo la máxima información y fiabilidad de las estadísticas.",
      false
    ),
    new Task(
      "Procesador de Productos",
      "He programado una aplicación para crear de forma sencilla los productos al e-commerce y al ERP de forma simultánea. Los proveedores nos hacen llegar sus archivos .csv, .xlsx... y a través de este procesador se maquetan automáticamente para subirlos automáticamente."
    ),
  ];
  tasks.forEach((v) => v.setType(KnowledgeType.CODE));
  return tasks;
};
