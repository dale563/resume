const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.config.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {

    mode: 'production',

    output: {
        filename: 'assets/scripts/[name]-[contenthash].bundle.js',
    },

    plugins: [
        new MiniCssExtractPlugin({
            linkType: 'text/css',
            filename: 'assets/styles/[name]-[contenthash].css'
         })
    ],

});