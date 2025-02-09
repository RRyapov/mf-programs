import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import ReactRefreshTypeScript from "react-refresh-typescript";
// import { buildBabelLoader } from "./babel/buildBabelLoader";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development';

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const fontLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  };

  const svgLoader =  {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [{ loader: '@svgr/webpack', options: { icon: true } }],
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      options.mode ? 'style-loader' : MiniCssExtractPlugin.loader,
      "css-loader",
      "sass-loader",
    ],
  };

  const esbuildLoader = {
  test: /\.[jt]sx?$/,
  loader: 'esbuild-loader',
  options: {
      target: 'es2015'
  }
}

// const babelLoader = buildBabelLoader(isDev);

  return [
    assetLoader, scssLoader, 
    // babelLoader,
    esbuildLoader,
    fontLoader, svgLoader
  ]
}