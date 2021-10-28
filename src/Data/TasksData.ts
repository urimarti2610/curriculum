import { ITaskData } from "../Interfaces/ITaskData";
import { TasksCodeData } from "./Tasks/TasksCodeData";
import { TasksDatabaseData } from "./Tasks/TasksDatabaseData";
import { TasksDesignData } from "./Tasks/TasksDesignData";
import { TasksMethodologyData } from "./Tasks/TasksMethodologyData";

export const TasksData:ITaskData[] = [
    ...TasksCodeData,
    ...TasksDatabaseData,
    ...TasksDesignData,
    ...TasksMethodologyData
]

