import User from "../Models/User"
import { getJobs } from "./Jobs"
import { IPersonData } from "../Interfaces/Data/IPersonData"
import { getKnowledge } from "./Knowledges"

export const setPerson = (person:IPersonData): User => {
  const u = new User(person.name, person.lastname)
  u.setBirthday(person.birthday)
  u.setEmail(person.email)
  u.setLinkedin(person.linkedin)
  u.setPhone(person.phone)
  u.setWebsite(person.website)
  u.setDescription(person.description)
  u.setJobs(getJobs())
  u.setKnowledge(getKnowledge())
  return u
}
