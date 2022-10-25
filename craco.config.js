const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@Components': path.resolve(__dirname, 'src/Components'),
      '@Providers': path.resolve(__dirname, 'src/Providers'),
      '@Contexts': path.resolve(__dirname, 'src/Contexts'),
      '@Hooks': path.resolve(__dirname, 'src/Hooks')
    }
  }
};
