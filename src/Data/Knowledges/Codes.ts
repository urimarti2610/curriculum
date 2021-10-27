import { KnowledgeType } from "../../Helpers/KnowledgeType";
import Knowledge from "../../Models/Knowledge";
import { getKnowledgeBabel } from "./Codes/Babel";
import { getKnowledgeJavascript } from "./Codes/Javascript";
import { getKnowledgePHP } from "./Codes/Php";
import { getKnowledgeReactJS } from "./Codes/ReactJS";

export const getKnowledgeCodes = (): Knowledge[] => {
  const d = [
    getKnowledgeJavascript(),
    getKnowledgePHP(),
    getKnowledgeReactJS(),
    getKnowledgeBabel(),
  ];
  d.forEach((v) => v.setType(KnowledgeType.CODE));
  return d;
};
