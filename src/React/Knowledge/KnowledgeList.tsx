import "./Knowledge.scss";
import React from "react";
import { IKnowledges } from "../../Interfaces/React/Knowledge";
import { KnowledgeElement } from "./KnowledgeElement";
import { KnowledgeType } from "../../Helpers/KnowledgeType";
import { FilterTypes } from "../_fragments/FilterTypes";
import { FilterOrder } from "../_fragments/FilterOrder";
import { OrderBy, OrderWay } from "../../Helpers/Order";
import { Loading } from "../_fragments/Loading";

export const KnowledgeList = (props: IKnowledges) => {
  const [knowledges, setKnowledges] = React.useState(props.knowledges);
  const [filterType, setFilterType] = React.useState(KnowledgeType.ALL);
  const [filterOrderBy, setFilterOrderBy] = React.useState(OrderBy.LEVEL);
  const [filterOrderWay, setFilterOrderWay] = React.useState(OrderWay.DESC);
  const [loading, setLoading] = React.useState(false);

  const reloadData = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 400);
  };
  
  React.useEffect(() => {
    filterData();
    reloadData();
  }, [filterType]);

  React.useEffect(() => {
    sortData();
    reloadData();
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
      value.visible ? <KnowledgeElement key={index} knowledge={value} /> : null
    );

  const renderContent = () => (
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

  if (!loading) {
    return renderContent()
  }
  return <Loading />;
};
