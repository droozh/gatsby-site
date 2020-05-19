import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyle from './header.module.scss'

const Header = () => {

    const data = useStaticQuery(graphql`
    query {    
        site {
            siteMetadata {
              title
              author
            }
        }
    }
    `)

    return (
        <header>
            <h1 >
                <Link className={headerStyle.title} to="/">{data.site.siteMetadata.title}</Link>
            </h1>
            <div>
                <ul className={headerStyle.navmenu}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blog">BLOG</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contacts</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header