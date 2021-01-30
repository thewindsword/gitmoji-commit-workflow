import Q from 'q';
import conventionalChangelog from './utils/conventional-changelog';
import recommendedBumpOpts from './utils/conventional-recommended-bump';
import gitRawCommitsOpts from './utils/git-raw-commit'; // 格式化 git log 信息
import parserOpts from './utils/parserOpts'; // 解析流
import writerOpts from './utils/writerOpts'; // 输出流

export default Q.all([
  conventionalChangelog,
  parserOpts,
  recommendedBumpOpts,
  writerOpts,
  gitRawCommitsOpts,
]).spread(
  (
    conventionalChangelog,
    parserOpts,
    recommendedBumpOpts,
    writerOpts,
    gitRawCommitsOpts,
  ) => ({
    conventionalChangelog,
    parserOpts,
    recommendedBumpOpts,
    writerOpts,
    gitRawCommitsOpts,
  }),
);
