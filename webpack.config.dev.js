import path from 'path'; 

export default {
  devtools: 'eval-source-map',
	entry: path.join(__dirname, '/client/index.js'),
	output: {
		path: '/'
	},
	module: {
    // apply loaders to files that meet given conditions
    loaders: [
      {
      test: /\.js$/,
      include: path.join(__dirname, '/client'),
      loaders: ['babel'] 
    }
   ]
  },
  resolve: {
  	extentions: ['','.js']
  }
}
