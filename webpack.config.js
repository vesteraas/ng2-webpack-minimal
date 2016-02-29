module.exports = {
    entry: './src/boot.ts',
    output: {
        filename: "bundle.js"
    },
    devtool: 'source-map',
    resolve: {
        alias: {
            materializecss: 'materialize-css/dist/css/materialize.css',
            materialize: 'materialize-css/dist/js/materialize.js',
            jQuery: 'jquery/dist/jquery.min.js'
        },
        extensions: ['', '.webpack.js', '.web.js', '.ts',  '.js', '.css', '.html']
    },
    module: {
        loaders: [
            {test: /materialize-css\/dist\/js\/materialize\.js/, loader: 'imports?materializecss'},
            {test: /\.ts$/, loader: 'ts-loader'},
            {test: /^((?!materialize).)*\.css$/, loader: 'raw-loader'},
            {test: /materialize\.css$/, loader: 'style-loader!css-loader'},
            {test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, loader: 'url-loader?limit=100000'},
            {test: /\.html$/, loader: 'raw'}
        ]
    }
};