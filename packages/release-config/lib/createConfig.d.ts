import type { Options as SemRelOptions } from 'semantic-release';
import type { Options } from './type';

export type { ReleaseRule, Options } from './type';
declare const createConfig: (options?: Options) => SemRelOptions;
export default createConfig;
