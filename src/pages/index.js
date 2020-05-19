import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const indexPage = () => (
    <Layout>
        <Head title="Home" />
        <h1>Hello!</h1>
        <h3>Welcome to my site</h3>
        <p>Need a developer?  <Link to="/contact">Contact me</Link></p>
    </Layout>
)

export default indexPage