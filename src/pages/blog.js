import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/Seo'

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => node)

  console.log(posts)

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Hi from the blog</h1>
      <p>
        Esse adipisicing non veniam sit in eiusmod ipsum. Ipsum qui voluptate
        consequat ea excepteur do id reprehenderit. Eiusmod culpa ex sunt quis.
        Consequat pariatur excepteur elit laborum nisi dolor. Sit eiusmod cillum
        est irure aute ea anim anim. Culpa proident irure magna sit aliquip
        labore elit anim proident culpa. Duis quis voluptate dolore proident et
        aute occaecat laboris laborum et ex in ullamco. Est anim consequat
        laborum ipsum. Ea excepteur nisi eu ex amet enim velit reprehenderit
        adipisicing cillum labore nisi. Qui sunt elit cupidatat quis. Culpa
        aliqua aliqua qui non laborum ad exercitation excepteur. Sit ex minim
        exercitation mollit veniam non. Est nostrud irure ut sit aliquip quis
        tempor exercitation ad elit qui culpa. Ex incididunt magna laborum
        nostrud eiusmod fugiat anim incididunt qui et laboris. Cillum ut ad
        officia minim. Id dolore ut commodo incididunt irure consectetur ut duis
        sunt aliqua veniam. Duis nostrud eiusmod proident do. Ipsum ullamco elit
        non velit minim nisi dolore non cupidatat dolore ad et esse do. Ex
        laborum Lorem eu nisi labore. Qui pariatur eu nisi ex nostrud est sunt.
        Ea elit id in veniam laboris consequat cupidatat elit adipisicing elit.
        Esse officia magna et sunt eiusmod pariatur non laborum est commodo sunt
        voluptate. Duis velit sunt commodo proident est commodo incididunt
        aliquip laboris proident labore enim. Duis nulla do irure dolor deserunt
        nulla nisi fugiat anim. Sunt ullamco ipsum sit et pariatur fugiat. Eu
        consectetur elit duis adipisicing nisi incididunt. Fugiat minim
        cupidatat duis sint. Consequat ullamco velit eiusmod voluptate fugiat
        voluptate velit minim pariatur fugiat elit. Aliquip exercitation cillum
        laboris excepteur magna labore tempor. Esse ipsum ea ex pariatur
        adipisicing enim. Proident qui voluptate voluptate aute sint adipisicing
        in in culpa qui in non. Cillum exercitation consectetur magna occaecat
        dolore laborum reprehenderit elit adipisicing magna. Deserunt et laborum
        exercitation veniam esse est veniam dolore. Dolore minim veniam labore
        irure irure occaecat fugiat laborum excepteur occaecat laborum aliqua
        labore. Ad sit laboris do anim et elit elit. Labore duis id nisi
        pariatur velit ullamco ex nulla fugiat sit ullamco labore adipisicing.
        Nostrud nulla consectetur esse in ex. Pariatur ut culpa ea est Lorem
        eiusmod esse ex. Ea exercitation duis id eu ipsum fugiat minim non.
        Ipsum nisi ea deserunt minim deserunt cupidatat in officia minim id sint
        mollit consequat aute. Sint id non occaecat consequat veniam sint.
        Cupidatat exercitation officia pariatur dolore sint incididunt ex veniam
        sit ea laboris duis non. Magna deserunt ipsum ad id do dolore labore
        minim do adipisicing quis ut sunt. Aliqua et et ullamco sint id proident
        Lorem non reprehenderit qui enim magna voluptate. Velit id amet deserunt
        ea minim occaecat ea laboris. Incididunt exercitation tempor labore ea
        sint occaecat. Consequat ad consectetur reprehenderit adipisicing cillum
        amet nisi. Et ut ut proident mollit commodo sit cupidatat magna do
        laborum veniam minim duis aute. Sit voluptate sit excepteur nulla ad et
        quis culpa fugiat id. Aute cupidatat fugiat eiusmod aliquip proident.
        Consectetur labore consequat ea elit irure culpa irure Lorem deserunt
        proident dolor amet aliquip ea. Nulla aliquip mollit esse occaecat.
      </p>

      <ul>
        {posts.map(({ frontmatter, id }) => (
          <li key={id}>
            <Link to={frontmatter.path}>
              {frontmatter.title} - {frontmatter.date}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Blog

export const recentPostsQuery = graphql`
  query RecentBlogPosts {
    allMarkdownRemark(
      limit: 5
      sort: { order: ASC, fields: frontmatter___date }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`
