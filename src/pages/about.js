import React from "react"
import Layout from "../components/layout1"
import Header from "../pages/header"
export default () => (
  <Layout>
  <div style={{ color: `teal` }}>
    <Header headerText="About Gatsby" />
    <Header headerText="Testing" />
    <p>Such wow. Very React.</p>
  </div>
  </Layout>
)