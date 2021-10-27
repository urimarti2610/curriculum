import { Code } from "../../../Helpers/Code";
import Knowledge from "../../../Models/Knowledge";

export const getKnowledgeVueJS = (): Knowledge => {
  const k = new Knowledge(Code.VUE);
  k.setLevel(4);
  k.setYears("2019-01-01");
  return k;
};
