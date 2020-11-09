/*
 * @Author: abc
 * @Date: 2020-11-03 11:58:51
 * @LastEditors: abc
 * @LastEditTime: 2020-11-08 23:11:01
 * @Description:
 */

let pattern = false;
if (process.env.NODE_ENV !== 'production') {
  pattern = true;
} else {
  // plugins.push('transform-remove-console');
  pattern = false;
}
module.exports = {
  runtimeCompiler: true,
  devServer: {
    // can be overwritten by process.env.HOST
    host: '0.0.0.0',
    port: 8083
  },
  productionSourceMap: pattern,
  css: {
    sourceMap: pattern,
    extract: !pattern,
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  }
};
