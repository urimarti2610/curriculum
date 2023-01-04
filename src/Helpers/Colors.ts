import { getColorKnowledge, KnowledgeType } from "./KnowledgeType"

export enum Color {
  SUCCESS = "success",
  DANGER = "danger",
  WARNING = "warning",
  INFO = "info",
}

export const getColor = (knowledge: KnowledgeType) =>
  Object.values(Color)[getColorKnowledge(knowledge)]

export const getColorsLength = () => Object.values(Color).length
