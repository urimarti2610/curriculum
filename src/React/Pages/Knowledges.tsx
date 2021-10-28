import React from "react";
import { IKnowledges } from "../../Interfaces/React/Knowledge";
import { KnowledgeList } from "../Knowledge/KnowledgeList";
import { Title } from "../_fragments/Title";
import { Page } from "./Page";

export const Knowledges = (props: IKnowledges) => (
  <React.Fragment>
    <Page><Title title="Conocimientos"/></Page>
    <Page>
      <KnowledgeList knowledges={props.knowledges} />
    </Page>
  </React.Fragment>
);
