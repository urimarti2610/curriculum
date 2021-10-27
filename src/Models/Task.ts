export default class Task {
  public name: string;
  public description: string;
  public like: boolean;
  public type: string = "";

  public constructor(name: string, description: string, like: boolean = true) {
    this.name = name;
    this.description = description;
    this.like = like;
  }

  public setType(s: string): void {
    this.type = s;
  }
}
