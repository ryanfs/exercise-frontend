// thanks to this blogpost for the webpack config
// https://dev.to/vish448/webpack-for-react-intro-3n01

var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './app/index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js'
    },
    module : {
        rules : [
            {test : /\.(js)$/, use:'babel-loader'},
            {test : /\.scss$/, use:['style-loader', 'css-loader']},
            // {test : /\.css$/, use:['style-loader', 'css-loader']}
            { test: /\.(jpg|png)$/, use: { loader: 'url-loader', }},
        ]
    },
    devServer: {
        // contentBasse: path.join(__dirname, "dist"),
        // compress: true,
        port: 8080,
        proxy: {
            '/': {
                target: 'http://localhost:3000',
                secure: false
            }
        }
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'app/index.html'
        })
    ]

}
