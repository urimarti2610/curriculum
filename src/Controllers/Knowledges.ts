import { KnowledgeData } from "../Data/KnowledgeData"
import { IKnowledgeData } from "../Interfaces/Data/IKnowledgeData"
import Knowledge from "../Models/Knowledge"

export const getKnowledge = (): Knowledge[] => {
  return KnowledgeData.map(v => setKnowledge(v))
}

const setKnowledge = (knowledge:IKnowledgeData): Knowledge => {
  const k = new Knowledge(knowledge.name)
  k.setLevel(knowledge.level)
  k.setYears(knowledge.years)
  k.setType(knowledge.type)
  return k
}
