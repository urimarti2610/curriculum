import { KnowledgeType } from "../../Helpers/KnowledgeType";
import Knowledge from "../../Models/Knowledge";
import { getKnowledgeAPI } from "./Databases/API";
import { getKnowledgeMongoDB } from "./Databases/MongoDB";
import { getKnowledgeMongoose } from "./Databases/Mongoose";
import { getKnowledgeMySQL } from "./Databases/MySQL";

export const getKnowledgeDataBases = (): Knowledge[] => {
  const d = [
    getKnowledgeAPI(),
    getKnowledgeMongoDB(),
    getKnowledgeMongoose(),
    getKnowledgeMySQL(),
  ];
  d.forEach((v) => v.setType(KnowledgeType.DATABASE));
  return d;
};
