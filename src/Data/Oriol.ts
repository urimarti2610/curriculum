import User from "../Models/User";
import { getJobs } from "./Jobs";
import { getKnowledge } from "./Knowledges";

export const setOriol = (): User => {
  const u = new User("Oriol", "Martí Collell");
  u.setBirthday("1990-10-26");
  u.setEmail("oriolmarti2610@gmail.com");
  u.setLinkedin("https://www.linkedin.com/in/oriol-mart%C3%AD-collell/");
  u.setPhone("+34 670 965 365");
  u.setWebsite("https://urimarti.com");
  u.setDescription(`<p>Soy una persona muy activa, resolutiva y con muchas ideas.</p>
    <p>Siempre me involucro en los proyectos como si fueran míos.</p>
    <p>Empecé a programar a los 12 años. Desde entonces me apasiona programar y nunca he dejado de aprender ni de querer conocer más lenguajes de programación.</p>
    <p>Mi máxima es poder disfrutar de las personas que me rodean. Poder aportar mi grano de arena para que sean mejores y más felices.</p>`);
  u.setJobs(getJobs());
  u.setKnowledge(getKnowledge());
  return u;
};
