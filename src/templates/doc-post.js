import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Sidebar from "../components/sidebar"

import ApiSummary from "../components/ApiSummary.js";
import TutorialsSummary from "../components/TutorialsSummary.js";
import FaqSummary from "../components/FaqSummary.js";
import SupportSummary from "../components/SupportSummary.js";

import docPostStyles from "./doc-post.module.css"

const shortcodes = { ApiSummary, TutorialsSummary, FaqSummary, SupportSummary }

export default function DocPost({ data }) {
    const document = data.mdx
    return (
        <Layout>
            <SEO title={document.frontmatter.post_title} description={document.excerpt} />
            <div className={docPostStyles.article}>                
                <MDXProvider components={shortcodes}>
                  <MDXRenderer>{document.body}</MDXRenderer>
                </MDXProvider>                
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