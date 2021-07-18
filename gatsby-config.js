module.exports = {
  pathPrefix: `/techno-colosseum`,
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Techno colosseum",
  },
  plugins: ["gatsby-plugin-react-helmet",
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: 'Techno Colosseum',
      short_name: 'Techno Colosseum',
      start_url: '/',
      background_color: '#f7f0eb',
      theme_color: '#a2466c',
      display: 'standalone',
      icon: 'src/images/icon.png',
      theme_color_in_head: false
    },
  }],
};
