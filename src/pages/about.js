import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const AboutPage = () => {
  return (
    <Layout>
      <title>About Page</title>
      
      <h1>About Page</h1>

      <ul>
        <li>
          <Link to="/" activeStyle={{ color: 'red'}}>Home</Link>
        </li>
        <li>
          <Link to="/about" activeStyle={{ color: 'red'}}>About</Link>
        </li>
      </ul>
    </Layout>
  )
}

export default AboutPage