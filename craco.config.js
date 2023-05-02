module.exports = {
      mode: 'development',
      devServer: {
        port: 5800
      },
    
    babel: {
      plugins: [
        "jsx-control-statements",
        "jsx-display-if",
      ],
    },
  };