import { Methodology } from "../../../Helpers/Methodology";
import Knowledge from "../../../Models/Knowledge";

export const getKnowledgeSCRUM = (): Knowledge => {
  const k = new Knowledge(Methodology.SCRUM);
  k.setLevel(4);
  k.setYears("2018-01-01");
  return k;
};
