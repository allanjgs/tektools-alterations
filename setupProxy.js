const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/users/auth',
    '/channels/{serverId}',
    '/roles/{serverId}',
    '/users/verification',
    '/collections/definition',
    '/collections/roles',

    createProxyMiddleware({
      target: 'https://tektools-api-dev.azurewebsites.net',
      changeOrigin: true,
      pathRewrite: {
        '^/users/auth': '/users/auth',
        '^/channels/{serverId}': '/channels/{serverId}',
        '^/roles/{serverId}': '/roles/{serverId}',
        '^/users/verification': '/users/verification',
        '^/collections/definition': '/collections/definition',
        '^/collections/roles': '/collections/roles'
      },
      onProxyRes: function (proxyRes, req, res) {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
      }
    })
  );
};