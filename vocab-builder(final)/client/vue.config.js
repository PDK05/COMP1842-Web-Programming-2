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
