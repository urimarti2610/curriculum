import { Code } from "../../../Helpers/Code";
import Knowledge from "../../../Models/Knowledge";

export const getKnowledgeMongoose = (): Knowledge => {
  const k = new Knowledge(Code.MONGOOSE);
  k.setLevel(4);
  k.setYears("2018-01-01");
  return k;
};
