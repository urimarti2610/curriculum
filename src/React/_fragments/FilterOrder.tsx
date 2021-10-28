import React from "react";
import { getOrderBy, getOrderWay } from "../../Helpers/Order";
import { IFilterOrder } from "../../Interfaces/React/Fragments";

export const FilterOrder = (props: IFilterOrder) => {
  const orderByArray = getOrderBy();
  const orderWayArray = getOrderWay();

  const renderList = () =>
    orderByArray.map((b) => (
      <span key={b}>
        {b}
        {orderWayArray.map((w) => (
          <span className={`select ${w}`} onClick={() => props.setFiltersOrder(b, w)} key={w}>{w}</span>
        ))}
      </span>
    ));

  return (
    <div className="list">
      <h5>Ordenar por:</h5>
      {renderList()}
    </div>
  );
};
