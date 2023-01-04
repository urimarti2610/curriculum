import "./Filter.scss";
import React from "react";
import { getOrderBy, getOrderWay } from "../../Helpers/Order";
import { IFilterOrder } from "../../Interfaces/React/Fragments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faSort,
} from "@fortawesome/free-solid-svg-icons";

export const FilterOrder = (props: IFilterOrder) => {
  const [orderBy, setOrderBy] = React.useState(props.orderBy);
  const [orderWay, setOrderWay] = React.useState(props.orderWay);

  React.useEffect(() => {
    setOrderBy(props.orderBy);
    setOrderWay(props.orderWay);
  }, [orderWay, orderBy]);

  const orderByArray = getOrderBy();
  const orderWayArray = getOrderWay();

  const renderList = () =>
    orderByArray.map((b) => (
      <span key={b}>
        {b}
        {orderWayArray.map((w) => (
          <span
            className={`select ${w}`}
            onClick={() => props.setFiltersOrder(b, w)}
            key={w}
          >
            {w === "ASC" ? (
              <FontAwesomeIcon
                icon={faChevronUp}
                className={`${orderBy === b && orderWay === w ? "active" : ""}`}
              />
            ) : (
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`${orderBy === b && orderWay === w ? "active" : ""}`}
              />
            )}
          </span>
        ))}
      </span>
    ));

  return (
    <div className="list">
      <h5 style={{display: "inline"}}><FontAwesomeIcon icon={faSort} /> Ordenar por:</h5>
      {renderList()}
    </div>
  );
};
