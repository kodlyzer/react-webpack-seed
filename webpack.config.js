var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',

    // Enable re-running webpack
    watch: true,
    colors: true,
    progress: true,

    module: {
        loaders: [{
            loader: "babel-loader",
            // Skip any files outside of your project's `src` directory
            include: [
                path.resolve(__dirname, "src"),
            ],
            // Only run `.js` and `.jsx` files through Babel
            test: /\.jsx?$/,
            // Options to configure babel with
            query: {
                // plugins: ['transform-runtime'],
                presets: ['es2015', 'react', 'stage-0'],
            }
        }]
    },
    output: {
        path: path.join(__dirname, 'build/js'),
        publicPath: '/build/',
        filename: '[name].js'
    },
    entry: {
        bundle: [
            './src/index.js'
        ]
    }
};