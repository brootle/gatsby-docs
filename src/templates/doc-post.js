import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Sidebar from "../components/sidebar"

import docPostStyles from "./doc-post.module.css"

export default function DocPost({ data }) {
    const document = data.mdx
    return (
        <Layout>
            <SEO title={document.frontmatter.post_title} description={document.excerpt} />
            <div className={docPostStyles.article}>
                {/* <h3>{document.frontmatter.post_title}</h3> */}
                {/* <div dangerouslySetInnerHTML={{ __html: document.html }} /> */}
                <MDXRenderer>{document.body}</MDXRenderer>
            </div>

            <Sidebar />
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        post_title
      }
    }
  }
`