import path from 'path';
import webpack, { DefinePlugin, type Configuration } from "webpack";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type { optionsBuild } from './types/webpack.build.types';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

export function webpackPlugins(options:optionsBuild): Configuration['plugins'] {
	// Исключение
	const isDevelopment = options.mode === 'development';
	const isProduction = options.mode === 'production';

	return [ // массив плагинов
		// new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }), // шаблон index.html
		new HtmlWebpackPlugin({ 
			template: options.paths.html, 
			favicon: path.resolve(options.paths.public, 'favicon.ico'),
		}),
		new DefinePlugin({ // Дополнительные переменные из окружения
			__ENV: JSON.stringify(options.env),
			__PASSWORD: JSON.stringify(options.password),
		}),
		
		isDevelopment && new ForkTsCheckerWebpackPlugin(), // процесс проверки типов (при игнорировании лоадером!)
		isDevelopment && new webpack.ProgressPlugin(), // процентный прогресс сборки (консоль)

		isProduction && new MiniCssExtractPlugin({ // отделение CSS от инъекции в JS-стринг.
			filename: 'css/[name].[contenthash:15].css', 
			chunkFilename: 'css/[name].[contenthash:15].css', 
		}),
		isProduction && new BundleAnalyzerPlugin(), // бандл анализатор
		isProduction && new CopyPlugin({ // плагин копирования статик-файлов
			patterns: [
				{ from: path.resolve(options.paths.public, 'static'), to: path.resolve(options.paths.output, 'static') },
				// { from: path.resolve(options.paths.public, 'static'), to: path.resolve(options.paths.output, 'static') },
			],
		}),
	].filter(Boolean)
}