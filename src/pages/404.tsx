import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <main className="notfound">
      <title>Not found</title>
      <h1 className="notfound__title">Page not found</h1>
      <hr className="notfound__hr" />
      <p className="notfound__text">
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        <Link className="notfound__link" to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
