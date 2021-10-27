import { Code } from "../../../Helpers/Code";
import Knowledge from "../../../Models/Knowledge";

export const getKnowledgeReactJS = (): Knowledge => {
  const k = new Knowledge(Code.REACT);
  k.setLevel(4.5);
  k.setYears("2018-01-01");
  return k;
};
