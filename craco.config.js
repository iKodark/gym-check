const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@Components': path.resolve(__dirname, 'src/Components')
    }
  }
};
