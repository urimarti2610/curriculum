import { Code } from "../../../Helpers/Code";
import Knowledge from "../../../Models/Knowledge";

export const getKnowledgeCSS = (): Knowledge => {
  const k = new Knowledge(Code.CSS);
  k.setLevel(5);
  k.setYears("2002-01-01");
  return k;
};
