<<<<<<< HEAD
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  chainWebpack: config => {
    // remove default copy plugin that may copy index.html
    if (config.plugins.has('copy')) {
      config.plugins.delete('copy')
    }

    // re-add copy plugin but ignore index.html so HtmlWebpackPlugin is sole emitter
    config.plugin('copy').use(CopyWebpackPlugin, [
      {
        patterns: [
          {
            from: path.resolve(__dirname, 'public'),
            globOptions: {
              ignore: ['**/index.html']
            },
            noErrorOnMissing: true
          }
        ]
      }
    ])
  }
}
=======
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  chainWebpack: config => {
    // remove default copy plugin that may copy index.html
    if (config.plugins.has('copy')) {
      config.plugins.delete('copy')
    }

    // re-add copy plugin but ignore index.html so HtmlWebpackPlugin is sole emitter
    config.plugin('copy').use(CopyWebpackPlugin, [
      {
        patterns: [
          {
            from: path.resolve(__dirname, 'public'),
            globOptions: {
              ignore: ['**/index.html']
            },
            noErrorOnMissing: true
          }
        ]
      }
    ])
  }
}
>>>>>>> b0482e08e10f87986513b5ce12a5656beedbc53c
