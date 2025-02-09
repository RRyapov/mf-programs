import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/types';

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const {mode, paths, port} = options;
  const isDev = mode === 'development';
  const TerserPlugin = require("terser-webpack-plugin");
  
  
return {
  mode: mode ?? 'development',
  entry: paths.entry,
  output: {
    filename: '[name].[contenthash].js',
    path: paths.output,
    clean: true,
  },
  plugins: buildPlugins(options),
  module: {
    rules: buildLoaders(options),
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },

  resolve: buildResolvers(options),
  devtool: isDev ? "eval-cheap-module-source-map" : 'source-map',
  devServer: isDev ? buildDevServer(options) : undefined,
}
}