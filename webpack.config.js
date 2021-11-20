const path = require('path');
const fs = require('fs');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
console.log('is DEV: ', isDev);

const pugPages = [];
function fromDir(startPath,filter){
    if (!fs.existsSync(startPath)){
        return;
    }
    const files=fs.readdirSync(startPath);
    for(let i=0;i<files.length;i++){
        const filename=path.join(startPath,files[i]);
        const stat = fs.lstatSync(filename);
        if (stat.isDirectory()){
            fromDir(filename,filter); //recurse
        }
        else if (filename.indexOf(filter)>=0) {
            console.log('-- found: ',filename);
            pugPages.push(filename.toString());
        };
    };
};

fromDir('./src/pages','.pug');
console.log('Pages: ', pugPages);


const pugPagesPlugin = pugPages.map(page => new HTMLWebpackPlugin({
    inject: true,
    chunks: '[name]',
    template: `${page}`,
    filename: '[name]/index.html'
}));

console.log('pug pages plugin: ', pugPagesPlugin);

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        },
        runtimeChunk: 'single'
    }

    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config
}

const filename = ext => {
    let name;
    if (ext == 'html') {
        name = isDev ? `[name]/index.${ext}` : `[name]/index.[hash].${ext}`;
    } else {
        name = isDev ? `[name]/[name].${ext}` : `[name]/[name].[hash].${ext}`;
    }
    return name
}

const cssLoaders = extra => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
        }, 
        "css-loader"
    ];
    if (extra) {
        loaders.push(extra);
    }
    return loaders
}

module.exports = {
    // context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        'main': './src/index.js',
        'ui-kit': './src/pages/ui-kit/ui-kit',
        'landing-page': './src/pages/landing-page/landing-page',
        'registration': './src/pages/registration/registration',
        'login': './src/pages/login/login'
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js']
    },
    optimization: optimization(),
    devServer: {
        port: 4200
    },
    // devtool: isDev ? 'source-map' : '',
    plugins: [
        new HTMLWebpackPlugin({
            inject: true,
            chunks: ['main'],
            template: 'src/index.pug',
            filename: 'index.html'
        }),
        new HTMLWebpackPlugin({
            inject: true,
            chunks: ['ui-kit'],
            template: 'src/pages/ui-kit/ui-kit.pug',
            filename: 'ui-kit/index.html'
        }),
        new HTMLWebpackPlugin({
            inject: true,
            chunks: ['landing-page'],
            template: 'src/pages/landing-page/landing-page.pug',
            filename: 'landing-page/index.html'
        }),
        new HTMLWebpackPlugin({
            inject: true,
            chunks: ['registration'],
            template: 'src/pages/registration/registration.pug',
            filename: 'registration/index.html'
        }),
        new HTMLWebpackPlugin({
            inject: true,
            chunks: ['login'],
            template: 'src/pages/login/login.pug',
            filename: 'login/index.html'
        }),

        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: filename('css'),
            ignoreOrder: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpg|svg|gif)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                type: 'asset/resource',
            },
            {
                test:  /\.xml$/,
                use: ['xml-loader'],
            },
            {
                test:  /\.csv$/,
                use: ['csv-loader'],
            },
            {
                test: /\.css$/i,
                use: cssLoaders(),
            },
            {
                test: /\.less$/i,
                use: cssLoaders('less-loader')
            },
            {
                test: /\.s[ac]ss$/i,
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.m?ts$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-typescript']
                    }
                }
            },
            {
                test: /\.(pug|jade)$/,
                loader: 'pug-loader',
                options: {
                    pretty: true,
                }
            }
        ]
    }
}