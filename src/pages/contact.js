import * as React from "react"
import Layout from "./../components/Layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { ExternalLink } from 'react-external-link';

const Contact = ({ data }) => {

  return (
    <Layout>
      <div className="contact">
        <Img fluid={data.file.childImageSharp.fluid} />
        <h1 className="contact__title">Contact Us</h1>
        <hr className="contact__hr" />
        <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FWarsaw&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=0&src=dGVzdGluZy5wcm9qZWN0cy5qb2xhbnRhQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=cGwucG9saXNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043" title="calendar" className="contact__calendar"></iframe>
        <ExternalLink href='https://calendar.google.com/calendar/u/0?cid=dGVzdGluZy5wcm9qZWN0cy5qb2xhbnRhQGdtYWlsLmNvbQ' className="contact__link">Make an Appointment</ExternalLink>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Contact {
    file(relativePath: {eq: "contact-us.jpg"}) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Contact