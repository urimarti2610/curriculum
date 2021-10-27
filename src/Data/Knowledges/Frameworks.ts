import { KnowledgeType } from "../../Helpers/KnowledgeType";
import Knowledge from "../../Models/Knowledge";
import { getKnowledgeExpressJS } from "./Frameworks/ExpressJS";
import { getKnowledgePrestashop } from "./Frameworks/Prestashop";
import { getKnowledgeRedux } from "./Frameworks/Redux";
import { getKnowledgeSymfony } from "./Frameworks/Symfony";
import { getKnowledgeWebpack } from "./Frameworks/Webpack";

export const getKnowledgeFrameWorks = (): Knowledge[] => {
  const d = [
    getKnowledgeExpressJS(),
    getKnowledgePrestashop(),
    getKnowledgeRedux(),
    getKnowledgeSymfony(),
    getKnowledgeWebpack(),
  ];
  d.forEach((v) => v.setType(KnowledgeType.FRAMEWORK));
  return d;
};
