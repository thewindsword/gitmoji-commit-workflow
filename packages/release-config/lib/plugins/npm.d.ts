import type { PluginSpec } from 'semantic-release';
import type { NPMPluginOpts } from '../type';

declare const npm: (options?: NPMPluginOpts) => PluginSpec;
export default npm;
