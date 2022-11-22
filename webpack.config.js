const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    {
        mode: 'development',
        entry: './src/electron.ts',
        target: 'electron-main',
        resolve: {
            extensions: ['.ts', '.js', '.tsx', '.scss', '.css', '.sass'],
            fallback: {
                fs: false,
            },
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    include: /src/,
                    use: [{loader: 'ts-loader'}],
                },
                {
                    test: /\.s[ac]ss$/i,
                    include: /src/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
                {
                    test: /\.(png|jpe?g|gif|jp2|webp)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'assets/[name].[ext]',
                    },
                },
            ],
        },
        output: {
            path: __dirname + '/dist',
            filename: 'electron.js',
        },
    },
    {
        mode: 'development',
        entry: './src/app.tsx',
        target: 'electron-renderer',
        devtool: 'source-map',
        resolve: {
            extensions: ['.ts', '.js', '.tsx', '.scss', '.css', '.sass'],
        },
        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    include: /src/,
                    use: [{loader: 'ts-loader'}],
                },
                {
                    test: /\.s[ac]ss$/i,
                    include: /src/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
                {
                    test: /\.(png|jpe?g|gif|jp2|webp)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'assets/[name].[hash:8].[ext]',
                    },
                },
            ],
        },
        output: {
            path: __dirname + '/dist',
            filename: 'app.js',
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
            }),
        ],
    },
];
