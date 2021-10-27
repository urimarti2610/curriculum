import { Code } from "../../../Helpers/Code";
import Knowledge from "../../../Models/Knowledge";

export const getKnowledgeBootstrap = (): Knowledge => {
  const k = new Knowledge(Code.BOOTSTRAP);
  k.setLevel(5);
  k.setYears("2014-01-01");
  return k;
};
