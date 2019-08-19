import React from "react"
import Layout from "../components/layout"
import Date from "../components/date"
import styled from "@emotion/styled"

const Body = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(2, 1fr);

  grid-template-areas: "i p";
`

const IndexPage = () => (
  <Layout>
    <Date />
    <Body></Body>
  </Layout>
)

export default IndexPage
