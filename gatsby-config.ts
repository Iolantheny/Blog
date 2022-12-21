import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: ``,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": process.env.ACCESSS_TOKEN,
      "spaceId": process.env.SPACE_ID
    }
  }, "gatsby-plugin-sass", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": process.env.TRACKING_ID
    }
  }, "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: "src/images/home.jpg",
    },
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
  },{
    resolve: `gatsby-source-google-calendar`,
    options: {
      calendarIds: [
        'testing.projects.jolanta@gmail.com'
      ],
      "client_secret": process.env.GOOGLE_CLIENT_SECRET,
      "client_id": process.env.GOOGLE_CLIENT_ID,
      timeMin: (new Date()).toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    }
  },
]
};

export default config;
