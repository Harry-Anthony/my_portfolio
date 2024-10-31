const path = require("path");
module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "@svgr/webpack",
            options: {
              jsx: true, // true outputs JSX tags
              tsx: true
            }
          }
        ]
      },
    ],
  }
};
