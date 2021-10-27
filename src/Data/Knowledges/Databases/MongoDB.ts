import { Code } from "../../../Helpers/Code";
import Knowledge from "../../../Models/Knowledge";

export const getKnowledgeMongoDB = (): Knowledge => {
  const k = new Knowledge(Code.MONGODB);
  k.setLevel(4);
  k.setYears("2018-01-01");
  return k;
};
