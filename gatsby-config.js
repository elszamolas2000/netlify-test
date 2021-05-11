module.exports = {
  siteMetadata: {
    title: `Elszámolás 2000 Bt.`,
    description: `Az Elszámolás 2000 Bt. több éves tapasztalattal végzi precíz munkáját a könyvelés, bérszámfejtés, adóbevallás, konzultáció, mérleg készítés és könyvelési tanácsadás területén Egerben.`,
    author: `@pityubak`,
    keywords: `könyvelés, eger, könyvelőiroda, bérszámfejtés, nav ,adóbevallás`,
    siteUrl: `https://elszamolas2000bt.hu/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-preact`,
    "gatsby-plugin-loadable-components-ssr",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Elszámolás 2000 Bt`,
        short_name: `elszamolas2000`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/logo.webp`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://elszamolas2000bt.hu",
        sitemap: "https://elszamolas2000bt.hu/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}
