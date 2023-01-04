import './Page.scss'
import React from "react";
import { IChildren } from '../../Interfaces/React/Body';

export const Page = (props:IChildren) => <div className="page">{props.children}</div>;
