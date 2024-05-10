const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/users/auth',
    '/channels/{serverId}',
    '/roles/{serverId}',
    createProxyMiddleware({
      target: 'https://tektools-api-dev.azurewebsites.net',
      changeOrigin: true,
      pathRewrite: {
        '^/users/auth': '/users/auth', // Pode ajustar conforme necessário
        '^/channels/{serverId}' :'/channels/{serverId}',
        '^/roles/{serverId}' :'/roles/{serverId}',
      },
      onProxyRes: function (proxyRes, req, res) {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
      }
    })
  );
};