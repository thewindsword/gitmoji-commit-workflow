'use strict';

var __assign =
  (void 0 && (void 0).__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

    return __assign.apply(this, arguments);
  };

var __importDefault =
  (void 0 && (void 0).__importDefault) ||
  function (mod) {
    return mod && mod.__esModule
      ? mod
      : {
          default: mod,
        };
  };

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var commitAnalyzer_1 = __importDefault(require('./plugins/commitAnalyzer'));

var git_1 = __importDefault(require('./plugins/git'));

var github_1 = __importDefault(require('./plugins/github'));

var npm_1 = __importDefault(require('./plugins/npm'));

var createConfig = function createConfig(options) {
  var opts = __assign(
    {
      changelogTitle: '# Changelog',
      changelogFile: 'CHANGELOG.md',
      enableNPM: true,
      enableGithub: true,
    },
    options,
  ); //  npm config

  var npmPublish = opts.npmPublish,
    pkgRoot = opts.pkgRoot,
    tarballDir = opts.tarballDir;
  var npmConfig = npm_1.default({
    npmPublish: npmPublish,
    pkgRoot: pkgRoot,
    tarballDir: tarballDir,
  }); // github config

  var githubUrl = opts.githubUrl,
    proxy = opts.proxy,
    releasedLabels = opts.releasedLabels,
    failTitle = opts.failTitle,
    githubApiPathPrefix = opts.githubApiPathPrefix,
    labels = opts.labels,
    failComment = opts.failComment,
    assignees = opts.assignees,
    addReleases = opts.addReleases,
    githubAssets = opts.githubAssets;
  var githubConfig = github_1.default({
    githubUrl: githubUrl,
    proxy: proxy,
    releasedLabels: releasedLabels,
    failTitle: failTitle,
    githubApiPathPrefix: githubApiPathPrefix,
    labels: labels,
    failComment: failComment,
    assignees: assignees,
    addReleases: addReleases,
    githubAssets: githubAssets,
  });
  var plugins = [
    /* 负责解析 commit */
    commitAnalyzer_1.default(opts.releaseRules),
    /* 此处生成 github-release 的日志 */
    [
      '@semantic-release/release-notes-generator',
      {
        config: 'conventional-changelog-gitmoji-config',
      },
    ],
    /* 此处会调用上一个插件生成的新增日志，然后合并到原有日志中 */
    [
      '@semantic-release/changelog',
      {
        changelogFile: opts.changelogFile,
        changelogTitle: opts.changelogTitle,
      },
    ],
    /* 自动更新版本号 如果没有 private ,会作为 npm 模块进行发布 */
    opts.enableNPM ? npmConfig : '',
    /* 将生成结果发布到 Github */
    opts.enableGithub ? githubConfig : '',
    /* 推送代码回到 Git */
    git_1.default(options),
  ];
  return {
    plugins: plugins.filter(function (p) {
      return !!p;
    }),
  };
};

exports.default = createConfig;
module.exports = exports.default;
