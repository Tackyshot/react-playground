module.exports = {
    entry: "./client/app.js",
    output: {
        filename: "server/sources/js/bundle.js"
    },
    module:{
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            }
        ]
    }
}