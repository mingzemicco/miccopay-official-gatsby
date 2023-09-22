const path = require(`path`);
const { getConfigFromGSheet, Title } = require('./src/sources/gSheet');

exports.createPages = async ({ actions }) => {

  const rows = await getConfigFromGSheet();

  actions.createPage({
    path: '/',
    component: path.resolve('./src/templates/indexPage.js'),
    context: { blogInfo: rows.slice(0, 3) },
  });

  actions.createPage({
    path: '/blogs',
    component: path.resolve('./src/templates/blogList.js'),
    context: { blogInfo: rows },
  });


  for (const row of rows) {
    if (!row || typeof(row) !== 'object') continue;
    actions.createPage({
      path: '/blogs/'+ row.slug,
      component: path.resolve('./src/templates/blogDetail.js'),
      context: row
    });
  }

}