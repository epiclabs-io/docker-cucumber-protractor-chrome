'use strict';

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: [
        '/tests/features/*.feature',
    ],
    allScriptsTimeout: 30000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        require: [
            "/tests/features/step_definitions/*.js"
        ],
        tags: false,
        format: 'pretty',
        profile: false,
        'no-source': true
    },
    capabilities: {
        browserName: 'chrome',

        chromeOptions: {
            args: [ "--headless", "--disable-gpu", '--window-size=1400x1000', '--no-sandbox' ]
        }
    }
};


