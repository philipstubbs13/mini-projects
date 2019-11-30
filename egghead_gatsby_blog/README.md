# Build a Blog with React and Markdown using Gatsby

* <https://egghead.io/courses/build-a-blog-with-react-and-markdown-using-gatsby>

## Install the latest version of Gatsby

```bash
npm install --global gatsby@next gatsby-cli@next
gatsby -v
gatsby new my-blog https://github.com/gatsbyjs/gatsby-starter-hello-world
cd my-blog
yarn
gatsby develop
```

## Install plugins for transforming markdown with Gatsby

```bash
npm install --save gatsby-source-filesystem@next gatsby-transformer-remark@next
touch gatsby-config.js
```

## Use the GraphiQL Browser to Build Queries for Gatsby

```bash
gatsby develop
```

```bash
{
  site {
    siteMetadata {
      title
      description
    }
  }
}

{
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          title
        }
      }
    }
  }
}
```