import React from "react";
import { IBody } from "../../Interfaces/React/Body";
import { ToggleTemplate } from "../_fragments/ToggleTemplate";
import { Description } from "./Description";
import { Jobs } from "./Jobs";
import { Knowledges } from "./Knowledges";

export const Body = (props: IBody) => {
  const [bodyClass, setBodyClass] = React.useState(props.bodyClass);
  const [user] = React.useState(props.user);

  const updateBodyClass = () =>
    setBodyClass(bodyClass === "" ? "theme-dark" : "");

  return (
    <section className={bodyClass}>
      <ToggleTemplate parentClick={updateBodyClass} />
      <Description user={user} />
      <Jobs jobs={user.jobs} />
      <Knowledges knowledges={user.knowledge} />
    </section>
  );
};
