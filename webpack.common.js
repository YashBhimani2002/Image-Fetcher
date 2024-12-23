const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        background: path.resolve('./src/background/background.ts'),
        content : path.resolve('./src/content/content.tsx'),
        buttonComponent: path.resolve('./src/components/DownloadButton/button.tsx'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    tailwindcss,
                                    autoprefixer
                                ]
                            }
                        }
                    }
                ]
            }
        ]

    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve('./src/static'),
                    to: path.resolve('dist')
                },
                {
                    from:path.resolve('./src/assets'),
                    to:path.resolve('dist/assets')
                }
            ]
        }),
        ...getHtmlPlugin(['background'])
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
}


function getHtmlPlugin(chunks){
    return chunks.map((chunk)=>{
        return new HtmlWebpackPlugin({
            title:'React extension',
            filename: `${chunk}.html`,
            chunks: [chunk],
        })
    })
} 