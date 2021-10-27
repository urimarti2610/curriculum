import { Code } from "../../../Helpers/Code";
import Knowledge from "../../../Models/Knowledge";

export const getKnowledgeAPI = (): Knowledge => {
  const k = new Knowledge(Code.API);
  k.setLevel(5);
  k.setYears("2014-01-01");
  return k;
};
