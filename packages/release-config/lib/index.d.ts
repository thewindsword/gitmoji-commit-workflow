import type { Options } from 'semantic-release';

declare const defaultConfig: Options;
export declare const createConfig: (
  options?: import('./type').Options,
) => Options;
export default defaultConfig;
