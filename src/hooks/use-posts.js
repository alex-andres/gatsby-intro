import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx{
        nodes{
          frontmatter{
            title
            slug
            author
          }
          excerpt
        }
      }
  }
  `)

  return data.allMdx.nodes.map(posts=>({
    title: posts.frontmatter.title,
    author: posts.frontmatter.author,
    slug: posts.frontmatter.slug,
    excerpt: posts.excerpt
  }))
}

export default usePosts;