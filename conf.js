exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['google-spec.js'],
  framework: 'jasmine',
  // utilizei o phantomjs para fazer o test.
  capabilities: {
    'browserName': 'chrome',
    //'phantomjs.binary.path': require('phantomjs').path,
    //'phantomjs.cli.args': ['--ignore-ssl-errors=true', '--web-security=false']
  },

};
