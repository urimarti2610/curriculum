import { Code } from "../Helpers/Code";
import { KnowledgeType } from "../Helpers/KnowledgeType";
import { Methodology } from "../Helpers/Methodology";
import { Program } from "../Helpers/Program";
import { getYears } from "../Helpers/Years";

export default class Knowledge {
  public name: Program | Methodology | Code;
  public years: number = 0;
  public level: number = 0;
  public from: string = "";
  public type: KnowledgeType | null = null;
  public visible: boolean = true;

  public constructor(name: Program | Methodology | Code) {
    this.name = name;
  }

  public setLevel(level: number): void {
    this.level = level;
  }

  public setYears(years: string): void {
    this.from = years;
    this.years = getYears(years);
  }

  public setType(type: KnowledgeType): void {
    this.type = type;
  }
}
