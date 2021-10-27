import { Code } from "../../../Helpers/Code";
import Knowledge from "../../../Models/Knowledge";

export const getKnowledgeSCSS = (): Knowledge => {
  const k = new Knowledge(Code.SCSS);
  k.setLevel(5);
  k.setYears("2014-01-01");
  return k;
};
