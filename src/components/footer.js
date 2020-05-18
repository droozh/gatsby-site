import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from'./footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {    
        site {
            siteMetadata {
              author
            }
        }
    }
    `)

    return (
        <div className={footerStyles.footer}>
            <p>Created By { data.site.siteMetadata.author }, Copyright 2020. All right reserved</p>
        </div>
    )
}

export default Footer