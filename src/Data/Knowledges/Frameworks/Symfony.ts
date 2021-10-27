import { Code } from "../../../Helpers/Code";
import Knowledge from "../../../Models/Knowledge";

export const getKnowledgeSymfony = (): Knowledge => {
  const k = new Knowledge(Code.SYMFONY);
  k.setLevel(3);
  k.setYears("2018-01-01");
  return k;
};
