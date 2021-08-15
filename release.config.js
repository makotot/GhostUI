module.exports = {
  branches: ['main'],
  repositoryUrl: 'git@github.com:makotot/GhostUI.git',
  plugins: [
    '@semantic-release/git',
    {
      message:
        // eslint-disable-next-line no-template-curly-in-string
        'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
    },
  ],
};
