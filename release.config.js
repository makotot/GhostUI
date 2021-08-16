module.exports = {
  branches: ['main'],
  repositoryUrl: 'git@github.com:makotot/GhostUI.git',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/changelog',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/github',
    '@semantic-release/git',
  ],
};
