const CracoLessPlugin = require("craco-less");

module.exports = {
  babel: {
    loaderOptions: {
      ignore: ["./node_modules/mapbox-gl/dist/mapbox-gl.js"],
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#e03",
              "@typography-title-margin-top": 0,
              "@typography-title-margin-bottom": 0,
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
