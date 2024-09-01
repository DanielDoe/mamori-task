const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  extension: /\.mdx?$/,
  latex: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
});

module.exports = withNextra();
