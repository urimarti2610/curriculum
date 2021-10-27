import { Program } from "../../../Helpers/Program";
import Knowledge from "../../../Models/Knowledge";

export const getKnowledgeExcel = (): Knowledge => {
  const k = new Knowledge(Program.EXCEL);
  k.setLevel(4.5);
  k.setYears("2006-01-01");
  return k;
};
