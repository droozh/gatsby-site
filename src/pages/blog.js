import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const BlogPage = () => {

    const data = useStaticQuery (graphql`
    query {
      allContentfulBlogPost(
        sort :{
          fields:date,
          order: ASC
        }
      ) {
        edges{
          node{
            title
            slug
            date(formatString:"MMMM Do. YYYY")
          }
        }
      }
    }
  `)

      return (
        <Layout>
          <Head title="Blog"/>
            <h1> This is my blog. </h1>
            <h2>Read latest posts:</h2>
            <ol  className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                          <Link to= {`/blog/${edge.node.slug}`}>
                            <h3>{edge.node.title}</h3>
                            <p>{edge.node.date}</p>
                          </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )

  //   const data = useStaticQuery (graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date
  //           }
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // console.log (data)
  //   return (
  //       <Layout>
  //           <h1> This is my blog. </h1>
  //           <h2>Read latest posts:</h2>
  //           <ol  className={blogStyles.posts}>
  //               {data.allMarkdownRemark.edges.map((edge) => {
  //                   return (
  //                       <li className={blogStyles.post}>
  //                         <Link to= {`/blog/${edge.node.fields.slug}`}>
  //                           <h3>{edge.node.frontmatter.title}</h3>
  //                           <p>{edge.node.frontmatter.date}</p>
  //                         </Link>
  //                       </li>
  //                   )
  //               })}
  //           </ol>
  //       </Layout>
  //   )
}

export default BlogPage