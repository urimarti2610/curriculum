import "./Loading.scss";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Loading = () => <FontAwesomeIcon id="loading" icon={faSpinner} size='3x' className='fa-spin'/>
