module.exports = {
	entry: './index.js',

	output: {
		filename: 'index.js',
		path: __dirname + '/dist/'
	},

	module: {
		rules: [
			{test: /\.jsx?/, use: {loader: 'babel-loader'}},
			{test: /\.s?css/, use: ['style-loader', 'css-loader', 'sass-loader']},
			{test: /\.(png|jpe?g|gif|ico)/, use: {loader: 'file-loader'}},
			{test: /\.ttf/, use: {loader: 'file-loader'}}
		]
	},

	resolve: {
		extensions: ['.js', '.jsx', '.css', '.scss', '.ttf', '.png', '.jpg', '.jpeg', '.gif']
	},

	devServer: {
		inline: true
	}
};