import "./Filter.scss"
import React from "react"
import { getOrderBy, getOrderWay, OrderBy, OrderWay } from "../../Helpers/Order"
import { IFilterOrder } from "../../Interfaces/React/Fragments"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp, faChevronDown, faSort } from "@fortawesome/free-solid-svg-icons"

export const FilterOrder = (props: IFilterOrder) => {

  const orderByArray = getOrderBy()
  const orderWayArray = getOrderWay()

  const getClassName = (way: OrderWay, by: OrderBy): string => (props.orderWay === way && props.orderBy === by) ? 'active' : ''

  const renderList = () => orderByArray.map((by) => (
    <span key={by}>
      {by}
      {orderWayArray.map((way) => (
        <span className={`select ${way}`} onClick={() => props.setFiltersOrder(by, way)} key={way}>
          {
            way === OrderWay.ASC ?
              <FontAwesomeIcon icon={faChevronUp} className={getClassName(OrderWay.ASC, by)} /> :
              <FontAwesomeIcon icon={faChevronDown} className={getClassName(OrderWay.DESC, by)} />
          }
        </span>
      ))}
    </span>
  ))

  return (
    <div className="list">
      <h5 style={{ display: "inline" }}><FontAwesomeIcon icon={faSort} /> Ordenar por:</h5>
      {renderList()}
    </div>
  )
}
