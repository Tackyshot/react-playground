const rewirePlugin = require('rewire-webpack');

module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        files: [
            { pattern: 'tests.webpack.js', watched: false }
        ],
        frameworks: ['jasmine-ajax', 'jasmine'],
        preprocessors: {
            'tests.webpack.js': ['webpack']
        },
        reporters: ['dots'],
        singleRun: true,
        webpack: {
            module: {
                loaders: [
                    { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
                ]
            },
            plugins: [
                new rewirePlugin()
            ],
            watch: true
        },
        webpackServer: {
            noInfo: true
        }
    });
};
