import { KnowledgeType } from "../../Helpers/KnowledgeType";
import Knowledge from "../../Models/Knowledge";
import { getKnowledgeBootstrap } from "./Layouts/Bootstrap";
import { getKnowledgeCSS } from "./Layouts/CSS";
import { getKnowledgeHMTL } from "./Layouts/HTML";
import { getKnowledgePUG } from "./Layouts/Pug";
import { getKnowledgeSCSS } from "./Layouts/SCSS";
import { getKnowledgeSmarty } from "./Layouts/Smarty";
import { getKnowledgeTwig } from "./Layouts/Twig";
import { getKnowledgeVueJS } from "./Layouts/VueJS";

export const getKnowledgeLayouts = (): Knowledge[] => {
  const d = [
    getKnowledgeBootstrap(),
    getKnowledgeCSS(),
    getKnowledgeHMTL(),
    getKnowledgePUG(),
    getKnowledgeSCSS(),
    getKnowledgeSmarty(),
    getKnowledgeTwig(),
    getKnowledgeVueJS(),
  ];
  d.forEach((v) => v.setType(KnowledgeType.LAYOUT));
  return d;
};
