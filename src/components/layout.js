import React from "react"
import PropTypes from "prop-types"
import Profile from "./Profile"

const Layout = ({ children }) => {
  return (
    <>
      <aside>
        <Profile />
      </aside>

      <main>
        {children}
      </main>
    </>
  )
}

Layout.prototype = {
  children: PropTypes.node.isRequired
}

export default Layout
