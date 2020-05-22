import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'


const ContactsPage = ( ) => (
    <Layout>
        <Head title="Contact" />
        <h1>Contact me</h1>
        <h3> if you want a beautiful site <Link to="/contact">Contact me</Link></h3>
    </Layout>
    )

export default ContactsPage