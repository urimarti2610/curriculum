import { KnowledgeType } from "../Helpers/KnowledgeType";

export default class Task {
  public name: string = "";
  public description: string = "";
  public like: boolean;
  public type: KnowledgeType;

  public constructor(
    name: string,
    description: string,
    type: KnowledgeType,
    like: boolean = true
  ) {
    this.name = name;
    this.description = description;
    this.like = like;
    this.type = type;
  }
}
