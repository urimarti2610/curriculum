import { Program } from "../../../Helpers/Program";
import Knowledge from "../../../Models/Knowledge";

export const getKnowledgeIllustrator = (): Knowledge => {
  const k = new Knowledge(Program.ILLUSTRATOR);
  k.setLevel(5);
  k.setYears("2009-01-01");
  return k;
};
