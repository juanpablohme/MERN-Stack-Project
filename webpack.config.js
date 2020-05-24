module.exports = {
    entry:  './src/app/index.js',
    output: {
        path: __dirname + '/src/public',
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                },        
                loader: 'babel-loader'
            }
        ]
    }
};