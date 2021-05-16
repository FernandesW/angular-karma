var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
exports.config = {
  allScriptsTimeout: 13000,

  directConnect:true,
  specs: [
    './e2e/todo-spec.js'
  ],
  capabilities: {
    'browserName': 'firefox',
  },

  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  ngApimockOpts: {
    angularVersion: 8  
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    global.ngApimock = require('./output/protractor.mock.js');
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
