import React from "react"
import { IKnowledges } from "../../Interfaces/React/Knowledge"
import { KnowledgeList } from "../Knowledge/KnowledgeList"
import { Title } from "../_fragments/Title"
import { Page } from "./Page"

export const Knowledges = (props: IKnowledges) => (
  <Page id="knowledges">
    <Title title="Conocimientos" />
    <KnowledgeList knowledges={props.knowledges} />
  </Page>
)
