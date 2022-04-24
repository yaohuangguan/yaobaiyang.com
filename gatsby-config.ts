module.exports = {
  siteMetadata: {
    title: 'sam.lol',
    description: 'Well, another version of my newest web blogs.',
    introduction: 'Frontend and backend developer at Lalamove.',
    author: 'Sam',
    siteUrl: 'https://www.yaobaiyang.com',
  },
  plugins: [
    // seo
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    // filesystem routing
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blogs`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'yaobaiyang.com',
        short_name: 'samyao',
        start_url: '/',
        background_color: '#663399',
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: 'minimal-ui',
        icon: 'static/favicon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
    'gatsby-plugin-dark-mode',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        // Add any options here
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@': 'src',
          '@components': 'src/components',
          '@constant': 'src/constant',
          '@hooks': 'src/hooks',
          '@pages': 'src/pages',
          '@templates': 'src/templates',
          '@utils': 'src/utils',
          '@typings': 'src/typings',
        },
        extensions: ['js', 'ts', 'jsx', 'tsx'],
      },
    },
    // {
    //   resolve: 'gatsby-plugin-favicon',
    //   options: { logo: './static/favicon.png' },
    // },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: { id: 'ldl2nlv' },
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
              backgroundColor: 'transparent',
              withWebp: true,
              showCaptions: true,
              quality: 80,
            },
          },
          'gatsby-remark-embed-video',
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-code-titles',
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-external-links',
        ],
      },
    },
  ],
}
