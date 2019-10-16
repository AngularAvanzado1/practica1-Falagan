module.exports = {
  name: 'informer',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/informer',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
