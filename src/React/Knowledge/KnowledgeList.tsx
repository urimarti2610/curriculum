import "./Knowledge.scss";
import React from "react";
import { IKnowledges } from "../../Interfaces/React/Knowledge";
import { KnowledgeElement } from "./KnowledgeElement";
import { KnowledgeType } from "../../Helpers/KnowledgeType";
import { FilterTypes } from "../_fragments/FilterTypes";
import { FilterOrder } from "../_fragments/FilterOrder";
import { OrderBy, OrderWay } from "../../Helpers/Order";

export const KnowledgeList = (props: IKnowledges) => {
  const [knowledges, setKnowledges] = React.useState(props.knowledges);
  const [filterType, setFilterType] = React.useState(KnowledgeType.ALL);
  const [filterOrderBy, setFilterOrderBy] = React.useState(OrderBy.LEVEL);
  const [filterOrderWay, setFilterOrderWay] = React.useState(OrderWay.DESC);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true)
    filterData()
    setTimeout(() => setLoading(false), 1)
  }, [filterType]);

  React.useEffect(() => {
    setLoading(true)
    sortData()
    setTimeout(() => setLoading(false), 1)
  }, [filterOrderWay, filterOrderBy]);

  const setFiltersOrder = (orderBy: OrderBy, orderWay: OrderWay) => {
    setFilterOrderBy(orderBy);
    setFilterOrderWay(orderWay);
  };

  const filterData = () =>
    setKnowledges(
      knowledges.map((v) => {
        v.visible =
          v.type === filterType || filterType === KnowledgeType.ALL
            ? true
            : false;
        return v;
      })
    );

  const sortData = () =>
    setKnowledges(filterOrderWay === OrderWay.DESC ? sortASC() : sortDESC());

  const sortDESC = () =>
    knowledges.sort((a, b) =>
      a[filterOrderBy] > b[filterOrderBy]
        ? 1
        : b[filterOrderBy] > a[filterOrderBy]
        ? -1
        : 0
    );

  const sortASC = () =>
    knowledges.sort((a, b) =>
      a[filterOrderBy] > b[filterOrderBy]
        ? -1
        : b[filterOrderBy] > a[filterOrderBy]
        ? 1
        : 0
    );

  const renderKnowledges = () =>
    knowledges.map((value, index) =>
      value.visible && !loading ? (
        <KnowledgeElement key={index} knowledge={value} />
      ) : null
    );

  return (
    <React.Fragment>
      <FilterTypes
        filterType={filterType}
        knowledges={knowledges}
        setFiltersType={setFilterType}
      />
      <FilterOrder
        orderBy={filterOrderBy}
        orderWay={filterOrderWay}
        setFiltersOrder={setFiltersOrder}
      />
      <div className="knowledge-list">{renderKnowledges()}</div>
    </React.Fragment>
  );
};
