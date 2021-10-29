import React from "react";
import { IKnowledge } from "../../Interfaces/React/Knowledge";
import { Level } from "../_fragments/Level";
import { Tag } from "../_fragments/Tag";

export const KnowledgeElement = (props: IKnowledge) => {
  const [knowledge] = React.useState(props.knowledge);

  return (
    <div className="knowledge" data-aos="fade-left" >
      <Tag tag={knowledge.type} />
      <h4>{knowledge.name}</h4>
      <h5>{knowledge.from.substr(0,4)} ({knowledge.years} años)</h5>
      <Level level={knowledge.level} />
    </div>
  );
};
