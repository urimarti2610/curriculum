import { Code } from "../../../Helpers/Code";
import Knowledge from "../../../Models/Knowledge";

export const getKnowledgeSmarty = (): Knowledge => {
  const k = new Knowledge(Code.SMARTY);
  k.setLevel(5);
  k.setYears("2011-01-01");
  return k;
};
