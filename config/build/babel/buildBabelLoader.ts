// import { BuildOptions } from "../types/types";

// export function buildBabelLoader(isDev: boolean){
//   return {
//   test: /\.tsx?$/, 
//   exclude: /node_modules/,
//   use: {
//     loader: "babel-loader",
//     options: {
//       presets: ['@babel/preset-env', "@babel/preset-typescript", 
//         ["@babel/preset-react", {
//           runtime: isDev ? 'automatic' : 'classic'
//         }]
//       ]
//     }
//    }
// }}