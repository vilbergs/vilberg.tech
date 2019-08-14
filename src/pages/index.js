import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Date from "../components/date"
import Image from "../components/image"
import Post from "../components/post"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Date />
    <Image/>
    <Post />
  </Layout>
)

export default IndexPage
