import { Code } from "../Helpers/Code";
import { KnowledgeType } from "../Helpers/KnowledgeType";
import { Methodology } from "../Helpers/Methodology";
import { Program } from "../Helpers/Program";
import { getYears } from "../Helpers/Years";

export default class Knowledge {
  public name: Program | Methodology | Code;
  public years: number;
  public level: number;
  public type: KnowledgeType | null;

  public constructor(name: Program | Methodology | Code) {
    this.name = name;
    this.type = null;
    this.years = this.level = 0;
  }

  public setLevel(level: number): void {
    this.level = level;
  }

  public setYears(years: string): void {
    this.years = getYears(years);
  }

  public setType(type: KnowledgeType): void {
    this.type = type;
  }
}
