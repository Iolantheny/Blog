import * as React from "react"
import { Link } from "gatsby"

const Navbar = () => {
    return (
        <div className="navbar">
            <h1 className="navbar__title">
                <span className="navbar__title navbar__title--bracket">﹤</span>
                Click
                <span className="navbar__title navbar__title--bracket">.</span>
                blog <span className="navbar__title navbar__title--bracket">/﹥</span>
            </h1>
            <div className="navbar__nav">
                <Link to="/" className="navbar__nav navbar__nav--link" activeClassName="active">Home</Link>
                <p>|</p>
                <Link to="/blog" className="navbar__nav navbar__nav--link" activeClassName="active">Blog</Link>
                <p>|</p>
                <Link to="/contact" className="navbar__nav navbar__nav--link" activeClassName="active">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar