import * as React from "react"
import Components from "./../components"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const Blog = ({ data }) => {

    const { Layout, BlogPost } = Components

    return (
        <Layout>
            <div>
                <Img fluid={data.BlogHome.childImageSharp.fluid} />
                <div>
                    {
                        data.allContentfulBlog.edges.map(post => (
                            <BlogPost
                                key={post.node.id}
                                slug={post.node.slug}
                                image={post.node.image.url}
                                link={post.node.slug}
                                title={post.node.title}
                                subtitle={post.node.subtitle}
                                author={post.node.author}
                                date={post.node.date}
                            />
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query Post {
        allContentfulBlog {
        edges {
            node {
                author
                title
                subtitle
                date(formatString: "LL")
                slug
                image{
                    url
                }
            }
        }
        }
        BlogHome: file(relativePath: {eq: "blog.jpg"}) {
          childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
          }
        }
    }    
`

export default Blog