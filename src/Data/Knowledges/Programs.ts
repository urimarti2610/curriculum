import { KnowledgeType } from "../../Helpers/KnowledgeType";
import Knowledge from "../../Models/Knowledge";
import { getKnowledgeExcel } from "./Programs/Excel";
import { getKnowledgeIllustrator } from "./Programs/Illustrator";
import { getKnowledgePhotoshop } from "./Programs/Photoshop";
import { getKnowledgeVSC } from "./Programs/VSC";

export const getKnowledgePrograms = (): Knowledge[] => {
  const d = [
    getKnowledgeExcel(),
    getKnowledgeIllustrator(),
    getKnowledgePhotoshop(),
    getKnowledgeVSC(),
  ];
  d.forEach((v) => v.setType(KnowledgeType.PROGRAM));
  return d;
};
