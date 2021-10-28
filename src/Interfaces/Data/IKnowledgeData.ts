import { Code } from "../../Helpers/Code";
import { KnowledgeType } from "../../Helpers/KnowledgeType";
import { Methodology } from "../../Helpers/Methodology";
import { Program } from "../../Helpers/Program";

export interface IKnowledgeData {
    name: Program | Methodology | Code,
    level: number,
    years: string,
    type: KnowledgeType
}