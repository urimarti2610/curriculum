import { IKnowledgeData } from "../Interfaces/IKnowledgeData"
import { codesData } from "./Knowledges/Codes"
import { databasesData } from "./Knowledges/Databases"
import { frameworksData } from "./Knowledges/Frameworks"
import { layoutsData } from "./Knowledges/Layouts"
import { methodologiesData } from "./Knowledges/Methodologies"
import { programsData } from "./Knowledges/Programs"

export const KnowledgeData:IKnowledgeData[] = [
    ...codesData,
    ...databasesData,
    ...frameworksData,
    ...layoutsData,
    ...methodologiesData,
    ...programsData
]