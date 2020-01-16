module.exports = {
  siteMetadata: {
    title: 'Alex Andres Portfolio Website',
    description:
      'The web development porfolio of Alex Andres, full stack javascript developer with an interest in building PWA with simplicity, performance and UX',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'posts'
      }
    }
  ],
};
