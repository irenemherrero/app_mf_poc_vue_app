const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('./package.json')

module.exports = {
    output: {
        publicPath: 'http://localhost:3002/'
    },
    devServer: {
        port: 3002,
        historyApiFallback: {
            index: '/index.html'
        }
    },
    resolve: {
        extensions: ['.js', '.vue']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    }
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'app_mf_poc_vue_app',
            filename: 'remoteEntry.js',
            exposes: {
                './ClickCounter': './src/components/ClickCounter.vue',
                './Content': './src/components/Content.vue',
                './mount': './src/mount.js'
            },
            shared: packageJson.dependencies
        }),
    ]
}
