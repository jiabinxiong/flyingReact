const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: {
        app: './index.js'
    },

    output: {
        filename: './bundle.js',        
        publicPath: ''
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets:[ 'es2015', 'react', 'stage-2' ]
                }
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader',
                options: {
                    // Limit at 50k. Above that it emits separate files
                    limit: 50000,
                    // Output below fonts directory
                    name: './font/[name].[ext]',
                  }

            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({          
            filename: './commen.css'
        })

    ]

}
