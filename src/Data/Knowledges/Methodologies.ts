import { KnowledgeType } from "../../Helpers/KnowledgeType";
import Knowledge from "../../Models/Knowledge";
import { getKnowledgeAgile } from "./Methodologies/Agile";
import { getKnowledgeSCRUM } from "./Methodologies/SCRUM";
import { getKnowledgeSOLID } from "./Methodologies/SOLID";

export const getKnowledgeMethodologies = (): Knowledge[] => {
  const d = [
    getKnowledgeAgile(),
    getKnowledgeSCRUM(),
    getKnowledgeSOLID()
  ];
  d.forEach((v) => v.setType(KnowledgeType.METHODOLOGY));
  return d;
};
