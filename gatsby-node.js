const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
    query AllBlogPages {
      blogs: allBlogsJson {
        nodes {
          category
          date
          title
          tags
          subtitle
          slug
          content {
            content
            tag
          }
        }
      }
  
      images: allImageSharp {
        edges {
          node {
            fluid {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }

    }
  `)

  const { blogs: { nodes }, images: { edges } } = data;
  const fluids = edges.map(edge => edge.node.fluid);
  for (const node of nodes) {
    const idx = fluids.findIndex(fluid => fluid.src.includes(node.slug));
    if (idx >= 0) {
      node.fluid = fluids[idx];
      fluids.splice(idx, 1);
    }
  }

  for (const node of nodes) {
    actions.createPage({
      path: '/blogs/'+ node.slug,
      component: path.resolve('./src/templates/blogDetail.js'),
      context: node
    });
  }

}