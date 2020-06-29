import React from "react"
import { useStaticQuery, graphql, Link, withPrefix } from "gatsby"

import logo from "../images/logo.svg"

import sidebarStyles from "./sidebar.module.css"

export default function Sidebar() {

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark (sort: { fields: [frontmatter___weight], order: DESC }) {
                totalCount
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
                    }
                }
            }
        }
    `)    

    // check URL against List of URL, it is unique if we find it only once
    function isUrlUniqueInUrlsList(url, urlList){
        let counter = -1
        urlList.forEach(item => {
            if(item.includes(url)){
                counter++
            }
        })
        return !counter
    }    

    function findAllSectionPostsInList(section, nodes){
        // posts will have matching urls /Tutorials/Storage/Qencode-Storage/  
        let posts = nodes.map(( {url, name} ) => {
            return {
                dir: url,
                name
            }
        })
        posts = posts.filter( ({ dir }) => dir.includes(section) && dir !== section)   
        
        // replace  "/Tutorials/Storage/Third-Party-Storage/microsoft-azure/" with "microsoft-azure"
        posts = posts.map(({ dir, name }) => {
            dir = dir.slice(1, -1).split('/')[3]
            return {
                dir: dir,
                name
            }
        })
            
        return posts
    }      


    let menu_from_data = []   

    let urlList = []

    let nodes = data.allMarkdownRemark.edges.map( ({ node }) => {
        // console.log(node.fields.slug)
        urlList.push(node.fields.slug)
        return {
            url: node.fields.slug,
            name: node.frontmatter.dir
        } 
    })      

    // add top level Docs first
    nodes.forEach( ({ url, name }) => {
        let urlArray = url.slice(1, -1).split('/')
        if(urlArray.length === 1){
            menu_from_data.push({
                "name": name,
                "dir": urlArray[0],
                "categories":[]                
            })
        }
    })   
    
    // add categories
    nodes.forEach( ({ url, name }) => {
        let urlArray = url.slice(1, -1).split('/')
        if(urlArray.length === 2){
            // find relevant Doc and add categories in there 
            menu_from_data.forEach(({ dir }, index) => {
                if(urlArray[0] === dir){
                    menu_from_data[index].categories.push({
                        "name": name,
                        "dir": urlArray[1],
                        "sections":[],
                        "posts":[]
                    })
                }
                
            })
        }
    })      

    // add sections[] and posts[] inside categories
    nodes.forEach( ({ url, name }) => {
        let urlArray = url.slice(1, -1).split('/')
        if(urlArray.length === 3){
            // if this part of URL is unique in URL list, this is POST
            // otherwise this is sectio
            // if URL is unique in the URLs list, push it to posts array of their category
 
            if(isUrlUniqueInUrlsList(url, urlList)){
                // find relevant Doc
                menu_from_data.forEach(({ dir }, index) => {
                    if(urlArray[0] === dir){
                        // find relevant category
                        menu_from_data[index].categories.forEach((category) => {
                            if(category.dir === urlArray[1]){
                                category.posts.push({
                                    "name": name,
                                    "dir": urlArray[2]
                                })
                            }
                        })
                    }                     
                })      
            } else{
                // find all posts relvant to this section and add them also      
                let posts = []
                posts = findAllSectionPostsInList(url, nodes)

                // this is a name of section, push it to the array of sections
                // find relevant Doc
                menu_from_data.forEach(({ dir }, index) => {
                    if(urlArray[0] === dir){
                        // find relevant category
                        menu_from_data[index].categories.forEach((category) => {
                            if(category.dir === urlArray[1]){          
                                category.sections.push({
                                    "name": name,
                                    "dir": urlArray[2],
                                    posts: posts
                                })                                
                            }
                        })
                    }                     
                }) 
            }    
  
        }
    })      

    // remove index page from top level docs
    menu_from_data = menu_from_data.filter(({ dir }) => dir !=='');

    // BUILDING UI
    // menu is sorted by 'weight' from md file frontmatter by Graphql request
    const menu = menu_from_data
    // console.log("menu", menu);
    
    // TODO
    // need to associate top level articles with images

    // <img src={`/gatsby-docs/images/docs/${item.dir}.svg`} alt={item.dir} />
    // <img src="/images/docs/tutorials.svg" alt="Tutorials" />

    // const prefixedURL = getPrefixedPath("/images/docs/tutorials.svg")
    // console.log("prefixedURL: ", prefixedURL)

    // const prefixedURL = withPrefix(`/images/docs/tutorials.svg`)
    // console.log("prefixedURL: ", prefixedURL)

    //let menu_items = menu.map( (item, index) => 
    // let menu_items = menu_from_data.map( (item, index) => 
    let menu_items = menu.map( (item, index) => 
        <li key={index}>
            <Link 
                to={`/${item.dir}/`}
                className={sidebarStyles.doc}
                activeClassName={sidebarStyles.active}
                partiallyActive={true}
            >
                <img src={withPrefix(`/images/docs/${item.dir}.svg`)} alt={item.dir} />
                <div>{item.name}</div>
            </Link>      

            <ul className={`${sidebarStyles.section} ${sidebarStyles.categories}`}>
                {item.categories.map((category, index) => (
                    <li key={index}>
                        <Link 
                            to={`/${item.dir}/${category.dir}/`}
                            activeClassName={sidebarStyles.active}
                            className={sidebarStyles.category}
                            partiallyActive={true}
                        >
                            {category.name}
                        </Link>   

                        <ul className={`${sidebarStyles.section} ${sidebarStyles.sections}`}>                            
                            {category.sections.map((section, index) => (
                                <li key={index}>
                                    <Link 
                                        to={`/${item.dir}/${category.dir}/${section.dir}/`}
                                        activeClassName={sidebarStyles.active}
                                        partiallyActive={true}
                                    >
                                        {section.name}
                                    </Link>  

                                    <ul className={`${sidebarStyles.section} ${sidebarStyles.posts}`}>                            
                                        {section.posts.map((post, index) => (
                                            <li key={index}>
                                                <Link 
                                                    to={`/${item.dir}/${category.dir}/${section.dir}/${post.dir}/`}
                                                    activeClassName={sidebarStyles.active}
                                                >
                                                    {post.name}
                                                </Link>   
                                            </li>
                                        ))}                            
                                    </ul>                                    

                                </li>
                            ))}

                            {category.posts.map((post, index) => (
                                <li key={index}>
                                    <Link 
                                        to={`/${item.dir}/${category.dir}/${post.dir}/`}
                                        activeClassName={sidebarStyles.active}
                                    >
                                        {post.name}
                                    </Link>   
                                </li>
                            ))}                            
                        </ul>

                    </li>
                ))}
            </ul>

        </li>        
    )    


    return (
        <div className={sidebarStyles.menu}>
            <div className={sidebarStyles.header}>
                <Link to='/'>
                    <img className={sidebarStyles.logo} src={logo} alt="Qencode" />
                </Link>             
            </div>
            <nav className={sidebarStyles.content}>
                <ul>{menu_items}</ul>
            </nav>
        </div>
    )
}









