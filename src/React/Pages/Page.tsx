import './Page.scss'
import React from "react";
import { IChildren } from '../../Interfaces/React/Body';

export const Page = (props:IChildren) => <div data-aos="fade-down" data-aos-duration="1000" className="page">{props.children}</div>;
