module.exports = {
    entry: ['./public/javascripts/client.js'],
    output: {
	path: './public',
	filename: '[name].bundle.js'       
    },
    module: {
	loaders: [
	    {
		test: /\.js$/,
		exclude: /node_modules/,
		loader: 'babel-loader'
	    }
	]
    },
    resolve: {
	extensions: ['', '.js', '.json', '.jsx', '.jade', '.html', '.css'] 
    }
}
