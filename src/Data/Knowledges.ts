import Knowledge from "../Models/Knowledge";
import { getKnowledgeCodes } from "./Knowledges/Codes";
import { getKnowledgeDataBases } from "./Knowledges/Databases";
import { getKnowledgeFrameWorks } from "./Knowledges/Frameworks";
import { getKnowledgeLayouts } from "./Knowledges/Layouts";
import { getKnowledgeMethodologies } from "./Knowledges/Methodologies";
import { getKnowledgePrograms } from "./Knowledges/Programs";

export const getKnowledge = (): Knowledge[] => {
  return [
    ...getKnowledgeCodes(),
    ...getKnowledgeDataBases(),
    ...getKnowledgeFrameWorks(),
    ...getKnowledgeLayouts(),
    ...getKnowledgeMethodologies(),
    ...getKnowledgePrograms(),
  ];
};
