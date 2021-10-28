import { Code } from "../../Helpers/Code";
import { KnowledgeType } from "../../Helpers/KnowledgeType";
import { IKnowledgeData } from "../../Interfaces/Data/IKnowledgeData";

const type = KnowledgeType.DATABASE

export const databasesData: IKnowledgeData[] = [
  {
    type,
    name: Code.API,
    level: 5,
    years: "2014-01-01",
  },
  {
    type,
    name: Code.MONGODB,
    level: 4,
    years: "2018-01-01",
  },
  {
    type,
    name: Code.MONGOOSE,
    level: 4,
    years: "2018-01-01",
  },
  {
    type,
    name: Code.MYSQL,
    level: 5,
    years: "2004-01-01",
  },
];
