import React from "react";
import { graphql } from "gatsby"
import Layout from "./../components/Layout"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const Post = (props) => {

    const Bold = ({ children }) => <span className="bold">{children}</span>
    const Text = ({ children }) => <p className="align-center">{children}</p>

    const options = {
        renderMark: {
            [MARKS.BOLD]: text => <Bold>{text}</Bold>,
        },
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
            [BLOCKS.EMBEDDED_ASSET]: node => {
                return (
                    <>
                        <h2>Embedded Asset</h2>
                        <pre>
                            <code>{JSON.stringify(node, null, 2)}</code>
                        </pre>
                    </>
                )
            },
        },
    }

    const content = renderRichText(props.data.contentfulBlog.content, options)

    return (
        <Layout>
            <div className="post">
                <img
                    src={props.data.contentfulBlog.image.url}
                    alt={props.data.contentfulBlog.image.description}
                    className="post__img"
                />
                <h1 className="post__title">{props.data.contentfulBlog.title}</h1>
                <hr className="post__hr" />
                <div className="post__date">
                    <p>{props.data.contentfulBlog.date}</p>
                    <p>author: {props.data.contentfulBlog.author}</p>
                </div>
                <div className="post__content">{content}</div>
            </div>
        </Layout>
    )
}

export default Post

export const pageQuery = graphql`
    query ContenfulBlogBySlug($slug: String!) {
        contentfulBlog( slug: {eq: $slug }) {
            title
            author
            date(formatString: "LL")
            content{
                raw
            }
            image {
                url
                description
              }
        }
    }
`