import { Code } from "../../../Helpers/Code";
import Knowledge from "../../../Models/Knowledge";

export const getKnowledgeExpressJS = (): Knowledge => {
  const k = new Knowledge(Code.EXPRESS);
  k.setLevel(4);
  k.setYears("2018-01-01");
  return k;
};
