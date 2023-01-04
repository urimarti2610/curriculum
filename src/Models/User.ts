import { getYears } from "../Helpers/Years"
import Job from "./Job"
import Knowledge from "./Knowledge"

export default class User {
  public name: string
  public lastName: string
  public email: string
  public website: string
  public linkedin: string
  public phone: string
  public birthday: string
  public description: string

  public jobs: Job[]
  public age: number
  public knowledge: Knowledge[]

  public constructor(name: string, lastName: string) {
    this.name = name
    this.lastName = lastName
    this.email =
      this.phone =
      this.website =
      this.linkedin =
      this.birthday =
      this.description =
        ""
    this.jobs = this.knowledge = []
    this.age = 0
  }

  public setEmail(s: string): void {
    this.email = s
  }

  public setPhone(s: string): void {
    this.phone = s
  }

  public setWebsite(s: string): void {
    this.website = s
  }

  public setLinkedin(s: string): void {
    this.linkedin = s
  }

  public setDescription(s: string): void {
    this.description = s
  }

  public setBirthday(s: string): void {
    this.birthday = s
    this.updateAge()
  }

  private updateAge() {
    this.age = this.getAge()
  }

  private getAge() {
    return getYears(this.birthday)
  }

  public setJobs(jobs: Job[]): void {
    this.jobs = jobs
  }

  public setKnowledge(knowledges: Knowledge[]): void {
    this.knowledge = knowledges
  }
}
