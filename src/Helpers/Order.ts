export enum OrderBy {
  LEVEL = "level",
  TYPE = "type",
  YEARS = "years",
}

export enum OrderWay {
  ASC = "ASC",
  DESC = "DESC",
}

export const getOrderBy = () => Object.values(OrderBy);
export const getOrderWay = () => Object.values(OrderWay);
