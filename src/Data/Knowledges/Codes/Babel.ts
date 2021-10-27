import { Code } from "../../../Helpers/Code";
import Knowledge from "../../../Models/Knowledge";

export const getKnowledgeBabel = (): Knowledge => {
  const k = new Knowledge(Code.BABEL);
  k.setLevel(2);
  k.setYears("2019-01-01");
  return k;
};
