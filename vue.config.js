const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
  publicPath: "./",
  productionSourceMap: false,
  outputDir: 'dist',
  configureWebpack: config => {
    // 开发环境不需要gzip
    if (process.env.NODE_ENV !== 'production') return
    config.plugins.push(
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: /\.(js|css)$/,// 匹配文件名
        threshold: 5120, // 对超过10k的数据压缩
        deleteOriginalAssets: false // 不删除源文件
      })
    )
  }
}
