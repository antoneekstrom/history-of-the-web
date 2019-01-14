const path = require('path');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname + "/src"),
    output: {
        path: path.resolve(__dirname + "/static"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /(.css)/,
                include: [
                    path.resolve(__dirname + "/src")
                ],
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"]
                }
            },
            {
                test: /\.css$/,
                loader: 'css-loader'
            }
        ],
    },
    resolve: {
        extensions: [
            '.js', '.tsx', '.ts', '.jsx'
        ]
    }
};