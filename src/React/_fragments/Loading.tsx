import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Page } from "../Pages/Page";

export const Loading = () => (
  <Page>
    <FontAwesomeIcon icon={faSpinner} size='6x' className='fa-spin'/>
  </Page>
);
