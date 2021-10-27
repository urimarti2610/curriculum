import { Code } from "../../../Helpers/Code";
import Knowledge from "../../../Models/Knowledge";

export const getKnowledgeMySQL = (): Knowledge => {
  const k = new Knowledge(Code.MYSQL);
  k.setLevel(5);
  k.setYears("2004-01-01");
  return k;
};
