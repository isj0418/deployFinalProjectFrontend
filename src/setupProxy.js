const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://54.180.32.176:8080',
            changeOrigin: true,
        })
    );

    app.use(
        '/ws',
        createProxyMiddleware({
            target: 'http://54.180.32.176:8080',
            ws: true,
        })
    );

};