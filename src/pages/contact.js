import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout1"
import Header from "../components/header"
export default () => (
  <Layout>
  <div style={{ color: `teal` }}>
    <Link to="/">Home</Link>
    <Header headerText="Contact" />
    <p>Send us a message!</p>
  </div>
  </Layout>
)