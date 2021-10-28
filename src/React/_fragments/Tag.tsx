import "./Tag.scss";
import { ITag } from "../../Interfaces/React/Fragments";
import React from "react";
export const Tag = (props: ITag) => <span className="tag">{props.tag}</span>;
