module.exports = {
    devServer: {
        port: 3000,
        disableHostCheck: true,
        proxy: {
            "/api/": {
                target: "https://orange-desert-05ffc270f.2.azurestaticapps.net/api/",
            }
        }
    },
};
