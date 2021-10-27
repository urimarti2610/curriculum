import { Program } from "../../../Helpers/Program";
import Knowledge from "../../../Models/Knowledge";

export const getKnowledgeVSC = (): Knowledge => {
  const k = new Knowledge(Program.VSC);
  k.setLevel(5);
  k.setYears("2017-01-01");
  return k;
};
