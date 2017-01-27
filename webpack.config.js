module.exports = {
    entry: ['./index', 'webpack-dev-server/client?https://0.0.0.0:8080'],

    output: {
        filename: 'bundle.js',
        path: './dist/',
        publicPath: './dist/'
    },

    watch: true,

    module: {
        loaders: [
            {test: /\.jsx?/, loader: 'babel-loader'},
            {test: /\.s?css/, loader: 'style-loader!css-loader!sass-loader'},
            {test: /\.(png|jpg|gif)/, loader: 'file?name=font/[name].[ext]'},
            {test: /\.ttf/, loader: 'file?name=img/[name].[ext]'}
        ],

        resolve: {
            extensions: ['.js', '.jsx', '.css', '.scss']
        }
    },
};