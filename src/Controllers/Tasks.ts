import { TasksData } from "../Data/TasksData";
import { JobList } from "../Helpers/JobList";
import { ITaskData } from "../Interfaces/ITaskData";
import Task from "../Models/Task";

export const getTasks = (job:JobList):Task[] => {
    const data = TasksData.filter(v => v.job === job)
    return data.map(v => setTask(v))
}

const setTask = (task:ITaskData):Task => new Task(task.name, task.description, task.type, task.liked)