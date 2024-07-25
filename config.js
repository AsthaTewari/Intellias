export const config = {
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.js'
    ],
    capabilities: [{
        platformName: 'Android',
        platformVersion: '11.0', // Update to match your device/emulator version
        deviceName: 'emulator-5554', // Update to match your emulator/device name
        app: '/mnt/data/Android-MyDemoAppRN.1.2.0.build-231.apk',
        automationName: 'UiAutomator2'
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
