import { Code } from "../../Helpers/Code"
import { KnowledgeType } from "../../Helpers/KnowledgeType"
import { IKnowledgeData } from "../../Interfaces/Data/IKnowledgeData"

const type = KnowledgeType.CODE

export const codesData: IKnowledgeData[] = [
  {
    type,
    name: Code.BABEL,
    level: 2,
    years: "2019-01-01",
  },
  {
    type,
    name: Code.JAVASCRIPT,
    level: 5,
    years: "2009-01-01",
  },
  {
    type,
    name: Code.PHP,
    level: 5,
    years: "2004-01-01",
  },
  {
    type,
    name: Code.REACT,
    level: 4.5,
    years: "2018-01-01",
  },
]
