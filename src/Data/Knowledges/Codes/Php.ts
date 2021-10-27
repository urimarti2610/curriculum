import { Code } from "../../../Helpers/Code";
import Knowledge from "../../../Models/Knowledge";

export const getKnowledgePHP = (): Knowledge => {
  const k = new Knowledge(Code.PHP);
  k.setLevel(5);
  k.setYears("2004-01-01");
  return k;
};
