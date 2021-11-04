import React, { Fragment } from "react"
import Header from "../components/Header"

const NotFoundPage = () => {
  return (
    <Fragment>
      <Header />
      <div className="four-o-four">
        <strong>404 error</strong>
        <p>Sorry, this page does not exist.</p>
      </div>
    </Fragment>
  )
}

export default NotFoundPage
