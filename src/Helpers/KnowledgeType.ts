import { getColorsLength } from "./Colors";

export enum KnowledgeType {
  CODE = "Code",
  DESIGN = "Design",
  METHODOLOGY = "Methodology",
  DATABASE = "DataBase",
  PROGRAM = "Program",
  FRAMEWORK = "FrameWork",
  LAYOUT = "Layout",
  ALL = "Todos",
}

export const getKnowledgeTypes = ():KnowledgeType[] =>
  Object.values(KnowledgeType).map((v) => v);

export const getColorKnowledge = (k: KnowledgeType): number => {
  let position = 0;
  const r = getKnowledgeTypes().forEach((v, i) => {
    if (v === k) position = i;
  });
  return getFinalNumber(position);
};

const getFinalNumber = (final: number): number => {
  const l = getColorsLength();
  if (final > l) {
    return getFinalNumber(final - l);
  }
  return final;
};
