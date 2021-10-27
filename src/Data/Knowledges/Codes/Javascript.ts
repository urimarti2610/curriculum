import { Code } from "../../../Helpers/Code";
import Knowledge from "../../../Models/Knowledge";

export const getKnowledgeJavascript = (): Knowledge => {
  const k = new Knowledge(Code.JAVASCRIPT);
  k.setLevel(5);
  k.setYears("2009-01-01");
  return k;
};
