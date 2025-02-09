import { Configuration } from "webpack"
import { BuildOptions } from "./types/types"
import path from "path"

export function buildResolvers(options: BuildOptions): Configuration['resolve'] {
 return {extensions: ['.tsx', '.ts', '.js'],
  alias: {
    '@shared': options.paths.shared,
    '@assets': options.paths.assets,
       '@widgets': options.paths.widgets,
       '@pages': options.paths.pages,
       '@features': options.paths.features,
       '@entities': options.paths.entities,
  }
 }

}