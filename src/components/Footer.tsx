import * as React from "react"
import { Link } from "gatsby"
import { ExternalLink } from 'react-external-link';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__title">
                <h1>
                    <span className="footer__title footer__title--bracket">﹤</span>
                    Click
                    <span className="footer__title footer__title--bracket">.</span>
                    blog
                    <span className="footer__title footer__title--bracket">/﹥</span>
                </h1>
            </div>
            <div className="footer__list">
                <p><Link to="/" className="footer__list footer__list--link">Home</Link></p>
                <p><Link to="/blog" className="footer__list footer__list--link">Blog</Link></p>
                <p><Link to="/contact" className="footer__list footer__list--link">Contact</Link></p>
                <p>Privacy</p>
                <p>Terms & Conditions</p>
            </div>
            <div className="footer__media">
                <ExternalLink href="https://www.facebook.com/" className="footer__media footer__media--link"><FaFacebookF /></ExternalLink>
                <ExternalLink href="https://www.instagram.com/" className="footer__media footer__media--link"><FaInstagram /></ExternalLink>
                <ExternalLink href="https://www.youtube.com/" className="footer__media footer__media--link"><FaYoutube /></ExternalLink>
            </div>
        </div>
    )
}

export default Footer