import { Code } from "../../../Helpers/Code";
import Knowledge from "../../../Models/Knowledge";

export const getKnowledgeWebpack = (): Knowledge => {
  const k = new Knowledge(Code.WEBPACK);
  k.setLevel(2);
  k.setYears("2018-01-01");
  return k;
};
