import React from "react";
import { getKnowledgeTypes, KnowledgeType } from "../../Helpers/KnowledgeType";
import { IFilterType } from "../../Interfaces/React/Fragments";

export const FilterTypes = (props: IFilterType) => {
  const types = getKnowledgeTypes();

  const getClassName = (name: KnowledgeType): string =>
    "btn " + (name === props.filterType ? "btn-primary" : "");

  const renderButton = (name: KnowledgeType, key: number = -1) => (
    <span
      key={key}
      className={getClassName(name)}
      onClick={() => props.setFiltersType(name)}
    >
      {name}
    </span>
  );

  return (
    <div className="list">
      <h5>Filtrar por:</h5>
      {renderButton(KnowledgeType.ALL)}
      {types.map((v, i) => {
        const c = props.knowledges.filter((f) => f.type === v);
        if (c.length) return renderButton(v, i);
      })}
    </div>
  );
};
