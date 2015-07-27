module.exports = {
    entry: "./client/app.js",
    output: {
        filename: "server/src/js/bundle.js"
    },
    module:{
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }
        ]
    }
}