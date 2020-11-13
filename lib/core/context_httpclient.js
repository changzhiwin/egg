'use strict';

class ContextHttpClient {
  constructor(ctx) {
    this.ctx = ctx;
    this.app = ctx.app;
  }

  // 2020-10-26 15:33:48 不知道为啥需要为Context单独定义这个方法，因为里面啥也没干，就是使用app上面的curl方法
  /**
   * http request helper base on {@link HttpClient}, it will auto save httpclient log.
   * Keep the same api with {@link Application#curl}.
   *
   * @param {String|Object} url - request url address.
   * @param {Object} [options] - options for request.
   * @return {Object} see {@link Application#curl}
   */
  curl(url, options) {
    options = options || {};
    options.ctx = this.ctx;
    return this.app.curl(url, options);
  }

  request(url, options) {
    return this.curl(url, options);
  }
}

module.exports = ContextHttpClient;
