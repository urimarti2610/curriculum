import { Program } from "../../../Helpers/Program";
import Knowledge from "../../../Models/Knowledge";

export const getKnowledgePhotoshop = (): Knowledge => {
  const k = new Knowledge(Program.PHOTOSHOP);
  k.setLevel(4);
  k.setYears("2009-01-01");
  return k;
};
