module.exports= {
	entry: './src',
	output: {
		path: __dirname + '/src/public/resources',
		publicPath: 'resources/',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					'babel-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					'file-loader'
				]
			}
		]
	}
}
