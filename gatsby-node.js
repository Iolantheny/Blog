const path = require("path")
const slash = require("slash")

exports.createPages = ({ graphql, actions }) => {

    const { createPage } = actions;

    const postTemplate = path.resolve("./src/templates/post.js")

    return graphql(
        `{
        allContentfulBlog {
            edges {
              node {
                slug
                title
              }
            }
          }
    }`
    ).then(result => {
        if (result.errors) {
            console.log("Error found ->", result.errors)
        }

        result.data.allContentfulBlog.edges.forEach(post => {
            createPage({
                path:`/blog/${post.node.slug}`,
                component: slash(postTemplate),
                context:{
                    slug: post.node.slug
                }
            })
        })
    }).catch(error => console.log("Error ->",))
}

