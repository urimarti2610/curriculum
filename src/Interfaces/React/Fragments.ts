import { KnowledgeType } from "../../Helpers/KnowledgeType";
import { OrderBy, OrderWay } from "../../Helpers/Order";
import Knowledge from "../../Models/Knowledge";

export interface ILevel {
  level: number;
}

export interface ITag {
  tag: KnowledgeType;
}

export interface IButtonAge {
  open: boolean;
  age: number;
}

export interface IFilterType {
  filterType: KnowledgeType;
  knowledges: Knowledge[];
  setFiltersType: any;
}

export interface IFilterOrder {
  orderBy: OrderBy;
  orderWay: OrderWay;
  setFiltersOrder: any;
}
