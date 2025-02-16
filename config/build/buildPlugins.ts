import { Configuration, DefinePlugin } from "webpack";
import { BuildOptions } from "./types/types";
import { ProgressPlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from "path";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'


export function buildPlugins({mode, paths, analyzer, platform}: BuildOptions): Configuration['plugins'] {
  const isDev = mode === 'development';
  const isProd = mode === 'production';
  const { ModuleFederationPlugin } = require('webpack').container;
  const deps = require('../../package.json').dependencies;


  const plugins: Configuration['plugins'] = [  new ModuleFederationPlugin({
    name: 'remotePrograms',
    filename: 'programs.js',
    exposes: { './ProgramsMF': './src/ProgramsMF.tsx' },
    shared: { react: { singleton: true, requiredVersion: deps.react }, 'react-dom': { singleton: true, requiredVersion: deps['react-dom']}},
  }), 
  new HtmlWebpackPlugin({template: paths.html, favicon: path.resolve(paths.assets, "yellow-strong-man.png" )}), new DefinePlugin({__PLATFORM__: JSON.stringify(platform)}), new ForkTsCheckerWebpackPlugin(), new ReactRefreshWebpackPlugin()];

  if(isDev){
    plugins.push(new ProgressPlugin())
  }

  if(isProd){
    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }))
    
  }
  if(analyzer){
    plugins.push(new BundleAnalyzerPlugin())
  }

  return plugins
}