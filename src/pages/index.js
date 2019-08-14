import React from "react"
import Layout from "../components/layout"
import Date from "../components/date"
import Image from "../components/image"
import Post from "../components/post"
import SEO from "../components/seo"
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
    <Body>
      <Image />
      <Post />
    </Body>
  </Layout>
)

export default IndexPage
