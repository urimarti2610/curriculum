import React from "react";
import { IBody } from "../../Interfaces/React/Body";
import { ToggleTemplate } from "../_fragments/ToggleTemplate";
import { Description } from "./Description";
import { Jobs } from "./Jobs";
import AOS from "aos";
import { Knowledges } from "./Knowledges";

export const Body = (props: IBody) => {
  const [bodyClass, setBodyClass] = React.useState(props.bodyClass);
  const [user] = React.useState(props.user);

  React.useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 600,
    });
    AOS.refresh();
  }, []);

  const updateBodyClass = () =>
    setBodyClass(bodyClass === "" ? "theme-light" : "");

  return (
    <section className={bodyClass}>
      <ToggleTemplate parentClick={updateBodyClass} />
      <Description user={user} />
      <Jobs jobs={user.jobs} />
      <Knowledges knowledges={user.knowledge} />
    </section>
  );
};
