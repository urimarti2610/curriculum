import { KnowledgeType } from "../../../Helpers/KnowledgeType";
import Task from "../../../Models/Task";

export const setTasksBiciescapaDatabase = (): Task[] => {
  const tasks = [
    new Task(
      "Informes KPI Google DataStudio",
      "Desde el Google DataStudio he hecho diferentes informes para poder tener en un vistazo rápido los KPIs actualizados de forma automática. Cogiendo los datos de Analytics, Ads, Shopping y MySQL.",
      false
    ),
  ];
  tasks.forEach((v) => v.setType(KnowledgeType.DATABASE));
  return tasks;
};
