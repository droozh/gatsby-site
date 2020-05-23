import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const NotFound = () => {
    return (
        <Layout>
            <Head title="404" />
            <h1>The page not found</h1>
            <p><Link to='/'>Go home</Link></p>
            <Link to="/contact">Or you may contact me.</Link>
        </Layout>
    )
}

export default NotFound