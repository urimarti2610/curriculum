import { Code } from "../../../Helpers/Code";
import Knowledge from "../../../Models/Knowledge";

export const getKnowledgeTwig = (): Knowledge => {
  const k = new Knowledge(Code.TWIG);
  k.setLevel(4);
  k.setYears("2018-01-01");
  return k;
};
