import { KnowledgeType } from "../../Helpers/KnowledgeType";
import Knowledge from "../../Models/Knowledge";
import { getKnowledgeJavascript } from "./Codes/Javascript";
import { getKnowledgePHP } from "./Codes/Php";
import { getKnowledgeReactJS } from "./Codes/ReactJS";

export const getKnowledgeCodes = (): Knowledge[] => {
  const d = [
    getKnowledgeJavascript(),
    getKnowledgePHP(),
    getKnowledgeReactJS(),
  ];
  d.forEach((v) => v.setType(KnowledgeType.CODE));
  return d;
};
