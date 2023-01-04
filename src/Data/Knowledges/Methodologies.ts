import { Methodology } from "../../Helpers/Methodology"
import { KnowledgeType } from "../../Helpers/KnowledgeType"
import { IKnowledgeData } from "../../Interfaces/Data/IKnowledgeData"

const type = KnowledgeType.METHODOLOGY

export const methodologiesData: IKnowledgeData[] = [
  {
    type,
    name: Methodology.AGILE,
    level: 5,
    years: "2018-01-01",
  },
  {
    type,
    name: Methodology.SCRUM,
    level: 4,
    years: "2018-01-01",
  },
  {
    type,
    name: Methodology.SOLID,
    level: 4,
    years: "2017-01-01",
  },
]
