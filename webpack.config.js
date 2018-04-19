const DEV_MODE = process.env.NODE_ENV === 'dev';

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractPlugin = new ExtractTextPlugin({
    filename: 'main.css'
});

module.exports = {
    devtool: DEV_MODE ? 'eval' : 'source-map',
    entry: "./src/js/app.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.scss$/, use: extractPlugin.extract({ use: ["css-loader", "sass-loader"], fallback: "style-loader" }) },
            { test: /\.html$/, loader: "raw-loader" }
        ],
    },
    plugins: [
        extractPlugin,
    ],
    devServer: {
        watchOptions: {
            ignored: /node_modules/
        }
    }
}
