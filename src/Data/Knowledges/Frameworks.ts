import { Code } from "../../Helpers/Code";
import { KnowledgeType } from "../../Helpers/KnowledgeType";
import { IKnowledgeData } from "../../Interfaces/IKnowledgeData";

const type = KnowledgeType.FRAMEWORK;

export const frameworksData: IKnowledgeData[] = [
  {
    type,
    name: Code.EXPRESS,
    level: 4,
    years: "2018-01-01",
  },
  {
    type,
    name: Code.PRESTASHOP,
    level: 5,
    years: "2011-01-01",
  },
  {
    type,
    name: Code.REDUX,
    level: 4,
    years: "2018-01-01",
  },
  {
    type,
    name: Code.SYMFONY,
    level: 3,
    years: "2018-01-01",
  },
  {
    type,
    name: Code.WEBPACK,
    level: 2,
    years: "2018-01-01",
  },
];
