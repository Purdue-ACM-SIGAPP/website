module.exports = {
    entry: './index',

    output: {
        filename: 'bundle.js',
        path: './dist/',
        publicPath: './dist/'
    },

    watch: true,

    module: {
        loaders: [
            {test: /\.jsx?/, loader: 'babel-loader'},
            {test: /\.s?css/, loader: 'style-loader!css-loader!sass-loader'}
        ],

        resolve: {
            extensions: ['.js', '.jsx', '.css', '.scss']
        }
    },
};