const { setHeadlessWhen } = require ('@codeceptjs/configure');
setHeadlessWhen(process.env.HEADLESS);
exports.config = {
  name: 'automacao-codeceptjs',
  tests: './login_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://automationpratice.com.br/',
      browser: 'chrome',
      waitForTimeout: 5000,
      desiredCapabilities: {
      chromeOptions: {
          
        }
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,  //executa alguma coisa antes
  teardown: null, //executa alguma coisa no final
  plugins: {
    allure: {
      enabled: true
    },
    mocha: { 
      reporterOptions: {
        reportDir: 'output'
      } 
    },
    stepByStepReport: {
      enabled: true,
      deleteSuccessful: false,
      fullPageScreenshots: true,
      screenshotsForAllureReport: true
    },
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: false
    },
  }
}