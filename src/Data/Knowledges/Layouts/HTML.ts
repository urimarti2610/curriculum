import { Code } from "../../../Helpers/Code";
import Knowledge from "../../../Models/Knowledge";

export const getKnowledgeHMTL = (): Knowledge => {
  const k = new Knowledge(Code.HTML);
  k.setLevel(5);
  k.setYears("2002-01-01");
  return k;
};
