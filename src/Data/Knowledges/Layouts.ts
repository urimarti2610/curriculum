import { Code } from "../../Helpers/Code";
import { KnowledgeType } from "../../Helpers/KnowledgeType";
import { IKnowledgeData } from "../../Interfaces/Data/IKnowledgeData";

const type = KnowledgeType.LAYOUT;

export const layoutsData: IKnowledgeData[] = [
  {
    type,
    name: Code.BOOTSTRAP,
    level: 5,
    years: "2014-01-01",
  },
  {
    type,
    name: Code.CSS,
    level: 5,
    years: "2002-01-01",
  },
  {
    type,
    name: Code.HTML,
    level: 5,
    years: "2002-01-01",
  },
  {
    type,
    name: Code.PUG,
    level: 4,
    years: "2018-01-01",
  },
  {
    type,
    name: Code.SCSS,
    level: 5,
    years: "2014-01-01",
  },
  {
    type,
    name: Code.SMARTY,
    level: 5,
    years: "2011-01-01",
  },
  {
    type,
    name: Code.TWIG,
    level: 4,
    years: "2018-01-01",
  },
  {
    type,
    name: Code.VUE,
    level: 4,
    years: "2019-01-01",
  },
];
