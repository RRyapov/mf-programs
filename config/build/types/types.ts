export interface BuildPaths {
  entry: string;
  html: string;
  output: string;
  src: string;
  public: string;
  assets: string;
  shared: string;
widgets: string;
pages: string;
features: string;
entities: string;
}

export type BuildMode = 'production' | 'development';
export type BuildPlatform = 'desktop' | 'mobile';

export interface BuildOptions {
  port: number;
  paths: BuildPaths;
  mode: BuildMode;
  analyzer?: boolean;
  platform: BuildPlatform;

}