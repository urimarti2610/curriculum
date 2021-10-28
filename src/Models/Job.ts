import { JobList } from "../Helpers/JobList";
import Task from "./Task";

export default class Job {
  public name: JobList;
  public description: string = "";
  public position: string = "";
  public from: string = "";
  public to: string = "";
  public tasks: Task[] = [];

  public constructor(name: JobList) {
    this.name = name;
  }

  public setDescription(s: string): void {
    this.description = s;
  }

  public setPosition(s: string): void {
    this.position = s;
  }

  public setFrom(s: string): void {
    this.from = s;
  }

  public setTo(s: string): void {
    this.to = s;
  }

  public setTasks(s: Task[]): void {
    this.tasks = s;
  }
}
