import { JobList } from "../Helpers/JobList"
import Task from "./Task"

export default class Job {
  public name: JobList
  public description: string = ""
  public position: string = ""
  public from: string = ""
  public to: string = ""
  public tasks: Task[] = []

  public constructor(name: JobList) {
    this.name = name
  }

  public setDescription(description: string): void {
    this.description = description
  }

  public setPosition(position: string): void {
    this.position = position
  }

  public setFrom(from: string): void {
    this.from = from
  }

  public setTo(to: string): void {
    this.to = to
  }

  public setTasks(s: Task[]): void {
    this.tasks = s
  }
}
