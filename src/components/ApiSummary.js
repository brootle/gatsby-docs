import React from 'react'
import { useStaticQuery, graphql, Link, withPrefix } from "gatsby"

import apiSummaryStyles from "./ApiSummary.module.css"

export default function ApiSummary({ title }) {

    const apiReferenceIndexPage = useStaticQuery(graphql`
        query {
            allMdx(filter: {fields: {slug: {regex: "/api-reference/"}}}, limit: 4, sort: {fields: frontmatter___weight, order: DESC}) {
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
                    excerpt(pruneLength: 210)
                  }
                }
              }
        }
    `)    

    // get index page that matches /api-reference/ slug exactly
    const index = apiReferenceIndexPage.allMdx.edges.filter( ({node}) => node.fields.slug === "/api-reference/" )[0];

    // get other nodes from api reference section
    const indexPage = {
        title: index.node.frontmatter.post_title,
        summary: index.node.excerpt
    }

    const apiNodes = apiReferenceIndexPage.allMdx.edges.filter( ({node}) => node.fields.slug !== "/api-reference/" );

    const apiPosts = apiNodes.map( ({ node }) => {
        let dir = node.fields.slug.slice(1, -1).split('/')[1]
        let excerpt = node.excerpt.slice(0, 45).trim().replace(/,\s*$/, "") + '...'
        return {
            title: node.frontmatter.post_title, 
            dir: dir,
            summary: excerpt,
            url: node.fields.slug
        }
    })

    const apiPostsComponent = apiPosts.map( (post, index) => 
        <Link to={post.url} key={index} className={apiSummaryStyles.postBlock} >
            <div className={apiSummaryStyles.postBlock__image}>
                <img src={withPrefix(`/images/docs/api-reference/${post.dir}.svg`)} alt={post.title} />
            </div>
            <div>
                <h4>{post.title}</h4>
                <p>{post.summary}</p>
            </div>
        </Link>
    )

    return(
        <section>
            <h2>{title}</h2>
            <Link to={`/api-reference/`}>
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
            </Link>
            <div className={apiSummaryStyles.postsList}>
                {apiPostsComponent}
            </div>
        </section>
    )
}
