import { ITaskData } from "../Interfaces/Data/ITaskData";
import { TasksCodeData } from "./Tasks/TasksCodeData";
import { TasksDatabaseData } from "./Tasks/TasksDatabaseData";
import { TasksDesignData } from "./Tasks/TasksDesignData";
import { TasksDirectionData } from "./Tasks/TasksDirectionData";
import { TasksMethodologyData } from "./Tasks/TasksMethodologyData";

export const TasksData:ITaskData[] = [
    ...TasksCodeData,
    ...TasksDatabaseData,
    ...TasksDesignData,
    ...TasksMethodologyData,
    ...TasksDirectionData
]

