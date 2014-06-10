exports.config = {
  allScriptsTimeout: 11000,
  seleniumPort: 4445,
  seleniumServerJar: '../test/lib/selenium-server-standalone-2.42.2.jar',

  specs: [
    '../test/*.js'
  ],

  capabilities: {
    'browserName': 'firefox'
  },

  onPrepare: function() {
    require('jasmine-reporters');
    jasmine.getEnv().addReporter(
      new jasmine.JUnitXmlReporter('test-reports', true, true));
  },

  baseUrl: 'http://localhost:8080/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};