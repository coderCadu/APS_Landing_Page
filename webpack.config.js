const path = require('path');
const { optimize: optimizeSvg } = require('svgo');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const pages = [
    { template: 'src/index.html', filename: 'index.html' },
    { template: 'src/about/index.html', filename: 'about/index.html' },
    { template: 'src/contact/index.html', filename: 'contact/index.html' },
];

module.exports = (env, argv) => {
    const isProd = argv.mode === 'production';

    return {
        mode: isProd ? 'production' : 'development',
        entry: {
            main: [
                path.resolve(__dirname, 'src/assets/js/jquery.js'),
                path.resolve(__dirname, 'src/assets/js/bootstrap.js'),
                path.resolve(__dirname, 'src/assets/js/site.js'),
                path.resolve(__dirname, 'src/assets/js/theme-toggle.js'),
            ],
            styles: [
                path.resolve(__dirname, 'src/assets/css/bootstrap-responsive.css'),
                path.resolve(__dirname, 'src/assets/css/bootstrap.css'),
                path.resolve(__dirname, 'src/assets/css/docs.css'),
                path.resolve(__dirname, 'src/assets/css/stylesG.css'),
                path.resolve(__dirname, 'src/assets/css/stylesGcontact.css'),
                path.resolve(__dirname, 'src/assets/css/theme.css'),
            ],
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'assets/js/[name].min.js',
            publicPath: 'auto',
            clean: true,
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: 'babel-loader',
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        // url(): mantém os caminhos relativos originais em vez de
                        // resolvê-los como módulos (alguns apontam para assets
                        // ausentes herdados do tema Bootstrap de docs).
                        { loader: 'css-loader', options: { url: false } },
                        'postcss-loader',
                    ],
                },
            ],
        },
        plugins: [
            new RemoveEmptyScriptsPlugin(),
            new MiniCssExtractPlugin({ filename: 'assets/css/[name].min.css' }),
            ...pages.map((page) => new HtmlWebpackPlugin({
                template: page.template,
                filename: page.filename,
                chunks: ['styles', 'main'],
                minify: isProd && { collapseWhitespace: true, removeComments: true },
            })),
            new CopyWebpackPlugin({
                patterns: [{
                    from: 'src/assets/img',
                    to: 'assets/img',
                    transform(content, absoluteFrom) {
                        if (path.extname(absoluteFrom) !== '.svg') return content;
                        try {
                            return optimizeSvg(content.toString(), { multipass: true }).data;
                        } catch (e) {
                            return content;
                        }
                    },
                }],
            }),
        ],
        optimization: isProd ? {
            minimizer: ['...', new CssMinimizerPlugin()],
        } : undefined,
        devServer: {
            static: path.resolve(__dirname, 'dist'),
            open: true,
            port: 8080,
        },
    };
};
