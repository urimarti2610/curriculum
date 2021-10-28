import { Program } from "../../Helpers/Program";
import { KnowledgeType } from "../../Helpers/KnowledgeType";
import { IKnowledgeData } from "../../Interfaces/Data/IKnowledgeData";

const type = KnowledgeType.PROGRAM;

export const programsData: IKnowledgeData[] = [
  {
    type,
    name: Program.EXCEL,
    level: 4.5,
    years: "2006-01-01",
  },
  {
    type,
    name: Program.VSC,
    level: 5,
    years: "2017-01-01",
  },
  {
    type,
    name: Program.PHOTOSHOP,
    level: 3.8,
    years: "2009-01-01",
  },
  {
    type,
    name: Program.ILLUSTRATOR,
    level: 5,
    years: "2009-01-01",
  },
];
