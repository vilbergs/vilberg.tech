import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/Seo'

const Blog = () => (
  <Layout>
    <SEO title="About" />
    <h1>About ME</h1>
    <p>Welcome to my about!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Blog
