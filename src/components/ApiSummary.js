import React from 'react'
import { useStaticQuery, graphql, Link, withPrefix } from "gatsby"

import apiSummaryStyles from "./ApiSummary.module.css"

export default function ApiSummary({ title }) {

    const apiReferenceIndexPage = useStaticQuery(graphql`
        query {
            allMdx(filter: {frontmatter: {dir: {eq: "API Reference"}}}) {
                edges {
                    node {
                        id
                        frontmatter {
                            post_title
                            dir
                            weight
                        }
                        fields {
                            slug
                        }
                        excerpt(pruneLength: 180)
                    }
                }
            }
        }
    `)    

    const indexPage = {
        title: apiReferenceIndexPage.allMdx.edges[0].node.frontmatter.post_title,
        summary: apiReferenceIndexPage.allMdx.edges[0].node.excerpt
    }


    console.log("apiReferenceIndexPage: ", apiReferenceIndexPage.allMdx.edges[0].node)

    return(
        <section>
            <h2>{title}</h2>
            <div className={apiSummaryStyles.summaryLinkBlock} >
                <div className={apiSummaryStyles.summaryCard} >
                    <div className={apiSummaryStyles.icon}>
                        <img src={withPrefix(`/images/docs/api-reference/index.svg`)} alt="API Reference" />
                    </div>        
                    <div>
                        <h4>{indexPage.title}</h4>
                        <p>{indexPage.summary}</p>
                    </div>
                </div>
                <div className={apiSummaryStyles.featuredImage}>
                    <img src={withPrefix(`/images/docs/api-reference/index__featured.png`)} alt="Response Example" />
                </div>
            </div>
        </section>
    )
}
