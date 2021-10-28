import { JobList } from "../../Helpers/JobList";
import { KnowledgeType } from "../../Helpers/KnowledgeType";

export interface ITaskData {
    name: string,
    description: string,
    job: JobList,
    liked?: boolean,
    type: KnowledgeType
}