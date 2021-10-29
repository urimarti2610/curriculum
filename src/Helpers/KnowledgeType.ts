import { getColorsLength } from "./Colors";

export enum KnowledgeType {
  CODE = "Programación",
  DESIGN = "Diseño",
  METHODOLOGY = "Metodología",
  DATABASE = "Bases de Datos",
  DIRECTION = "Dirección y Gestión",
  PROGRAM = "Programas",
  FRAMEWORK = "FrameWorks & Librerías",
  LAYOUT = "Maquetación",
  ALL = "Todos",
}

export const getKnowledgeTypes = (): KnowledgeType[] =>
  Object.values(KnowledgeType).map((v) => v);

export const getColorKnowledge = (k: KnowledgeType): number => {
  let position = 0;
  getKnowledgeTypes().forEach((v, i) => {
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
