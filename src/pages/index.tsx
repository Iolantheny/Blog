import * as React from "react"
import "./../styles/themes/theme.scss"
import Layout from "./../components/Layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

const IndexPage = ({ data }) => {
  console.log(data.allContentfulBlog.edges[0].node)
  return (
    <main>
      <Layout>
        <div className="home">
          <Img fluid={data.file.childImageSharp.fluid} />
          <div>
            <h1 className="home__title">About Us</h1>
            <hr className="home__hr" />
            <p className="home__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div>
            <h2 className="home__last">Last Added</h2>
            <hr className="home__hr" />
            <ul>
              {
                data.allContentfulBlog.edges.map(post => (
                  <li key={post.node.id} className="home__list">
                    <Link to={`/blog/${post.node.slug}`} className="home__list home__list--link">
                      {post.node.title}
                      <p className="home__list home__list--date">{post.node.date}</p>
                    </Link>
                    <hr className="home__list--hr"/>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </Layout>
    </main>
  )
}

export const query = graphql`
  query Home {
    file(relativePath: {eq: "home.jpg"}) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
      }
    }
    allContentfulBlog {
      edges {
          node {
              title
              date(formatString: "LL")
              slug
          }
      }
      }
  }
`

export default IndexPage
