const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const pages = [
	'index'
].map(item => new HtmlWebpackPlugin({
	filename: `${item}.html`,
	template: `src/views/${item}.pug`
}));

const commonConfig = {
	entry: {
		template: './src/js/template'
	},

	output: {
		filename: 'js/[name].js',
		path: path.resolve(__dirname, 'dist')
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env'],
					plugins: ['@babel/plugin-syntax-dynamic-import']
				}
			},

			{
				test: /\.pug$/,
				loader: 'pug-loader',
				options: {
					pretty: '\t'
				}
			}
		]
	},

	plugins: [
		new CopyWebpackPlugin([
			{ from: 'src/assets/fonts/icons/fonts', to: 'fonts/icons' },
			{ from: 'src/assets/fonts/HelveticaNeueCyr', to: 'fonts/HelveticaNeueCyr' },

			// add another local fonts here ..

			{ from: 'src/assets/images', to: 'images' }
		]),

		new MiniCssExtractPlugin({
			filename: 'styles.css'
		}),

		...pages,

		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery',
			'window.jQuery': 'jquery'
		})
	]
};

const productionConfig = {
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							url: false
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								require('autoprefixer')()
							]
						}
					},
					'sass-loader'
				]
			}
		]
	},

	plugins: [
		new CleanWebpackPlugin(),

		new FaviconsWebpackPlugin({
			logo: './src/assets/favicon.png',
			prefix: 'favicon/'
		})
	]
};

const developmentConfig = {
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							url: false,
							sourceMap: true
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								require('autoprefixer')()
							],
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	},

	plugins: [
		new webpack.SourceMapDevToolPlugin({
			filename: '[file].map'
		})
	],

	devtool: 'cheap-module-eval-source-map',

	devServer: {
		host: '192.168.1.209',
		port: 3007,
		stats: 'errors-only',
		overlay: true,
		open: true
	},

	watchOptions: {
		aggregateTimeout: 0
	}
};

module.exports = mode => {
	if (mode === 'production') {
		return merge(commonConfig, productionConfig, { mode })
	}

	return merge(commonConfig, developmentConfig, { mode })
};
