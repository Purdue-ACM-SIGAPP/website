module.exports = {
    entry: './index.html',

    output: {
        filename: 'index.html',
        path: './dist/',
        publicPath: './dist/'
    },

    watch: true,

    module: {
        loaders: [
            {test: /\.jsx?/, loader: 'babel-loader'},
            {test: /\.s?css/, loader: 'style-loader!css-loader!sass-loader'},
            {test: /\.(png|jpe?g|gif)/, loader: 'file?name=img/[name].[ext]'}, //?name=font/[name].[ext]
            {test: /\.ttf/, loader: 'file?name=font/[name].[ext]'}
        ],

        resolve: {
            extensions: ['.js', '.jsx', '.css', '.scss', '.ttf', '.png' ,'.jpg', '.jpeg', '.gif']
        }
    },
};