


- - - 
## General System Requirements

#### Node JS


* Download[ Node Js](https://linktodocumentation) depending on your operating system.
#### Java JDK & JAVA_HOME variable

* [Open JDK](https://openjdk.org)
* [JAVA_HOME setup for Windows](https://confluence.atlassian.com/doc/setting-the-java_home-variable-in-windows-8895.html)
* [JAVA_HOME setup for Mac](https://mkyong.com/java/how-to-set-java_home-environment-variable-on-mac-os-x/)



* Installed Adopted [Open JDK with Homebrew](https://formulae.brew.sh/cask/adoptopenjdk)
* To return where was the SDK installed I used the command:
```bash
    /usr/libexec/java_home
```
* If you want to check the java version:
```bash
    /usr/libexec/java_home -V
```
* Open the zshenv file to insert the JAVA_HOME variable (i):
```bash
    vim ~/.zshenv
```
* Enter the environment variable and save the vim session (:wq!):
```bash
    export JAVA_HOME=$(/usr/libexec/java_home)
```
* Source and apply the changes in the system:
```bash
    source ~/.zshenv
```
* You can check if it was set correctly running the command:
```bash
    echo $JAVA_HOME
```
* It should return something like: 
```bash
    /Library/Java/JavaVirtualMachines/adoptopenjdk-16.jdk/Contents/Home
```

## Android Setup
#### Android Studio & ANDROID_HOME variable

* [Android Studio](https://developer.android.com/studio?hl=es-419&gclsrc=aw.ds&gclid=Cj0KCQjwyOuYBhCGARIsAIdGQRNrDv20QvoOy_-I5E1LoZdOLu3nvhlwX_7EjPeHcE1kGQNNcIVOme0aAqckEALw_wcB)
* [ANDROID_HOME setup for Windows](https://www.testingdocs.com/setting-android_home-environment-variable-on-windows/)
* [ANDROID_HOME setup for Mac](https://stackoverflow.com/questions/19986214/setting-android-home-enviromental-variable-on-mac-os-x)


* Android studio on Mac can be located at:
```bash
    * cd /Users/[USER]/Library/Android/sdk
```
* We need to add a reference to a couple of folders inside of that SDK
   * Tools & Platform Tools
* Open the zshenv file to insert the ANDROID_HOME variable (i):
```bash
    vim ~/.zshenv
```
* Enter the environment variables and save the vim session (:wq!):
```bash
    export ANDROID_HOME="/Users/[USER]/Library/Android/sdk"
    export PATH=$ANDROID_HOME/platform-tools:$PATH
    export PATH=$ANDROID_HOME/tools:$PATH
```
* Source and apply the changes in the system:
```bash
    source ~/.zshenv
```
* You can check if it was set correctly running the command:
```bash
    echo $ANDROID_HOME
```
* It should return something like: 
```bash
    /Users/[USER]/Library/Android/sdk
```
* With this configured you can access the command [Android Debug Bridge](https://developer.android.com/studio/command-line/adb)
```bash
    adb
```
- - -


---

#### Download Appium Inspector
In order to find the correct locators to map elements, you will need to have this tool installed in your computer.

* [Appium Inspector Releases](https://github.com/appium/appium/blob/1.x/docs/en/writing-running-appium/web/chromedriver.md)

For this project you can use the following configuration:

| Server Key | Server Value |
| ------------- | ------------- |
| Remote Host | 0.0.0.0 |
| Remote Port | 4724 |
| Remote Path | / |

Android Desired Capabilities(Example)
| Desired Capability Key  | Desired Capability Value |
| ------------- | ------------- |
| platformName  | Android |
| platformVersion  | [OS VERSION / IMAGE]  |
| deviceName | [EMULATED_DEVICE_NAME] | 
| app | /[PROJECT_PATH]/[APP_NAME].apk |
| appium:automationName | UIAutomator2 |

|

#### Install Apium 
Appium is an open source test automation framework for use with native, hybrid and mobile web apps. 
It drives iOS, Android, and Windows apps using the WebDriver protocol.

* Install [Appium](https://appium.io) from the official documentation 
* Install [Appium 2](https://appiumpro.com/editions/122-installing-appium-20-and-the-driver-and-plugins-cli) by Node JS(Beta):
```bash
    npm install -g appium@next
```
Check the appium version using
```bash
    appium -v
```

#### Appium Doctor
To check if your OS meets the appium requirements, install this node package.
* [Appium Doctor Package](https://github.com/appium/appium-doctor)
Install it using the command 
```bash 
npm install appium-doctor -g
```
And then use the library:
```bash 
appium-doctor
```

#### Appium drivers
If you want Appium to work correctly, you need to download and have the android/ios driver in your system.
Run the commands:
```bash 
appium driver install xcuitest
appium driver install uiautomator2
```
Check the installed drivers using
```bash 
appium driver list
```


## Setup WebDriverIO

1- Run the command to create the package.json & continue with the installation process
```bash
    npm init wdio .
```
2- Using the WDIO Configuration Helper select the options you want to select. In my case I decided to use:  
* On my local machine
* Mocha
* No compiler
* Spect Location: Default
* Do you want WebDriverIO to generate some test files?: No
* Reporter: Spec
* No Plugin 
* Service: Appium
* Base URL: Default
* NPM Install: Yes

3- Add your tests at 
```bash
'./[yourProject]/specs/**/*.js'
```

4- Configure the app route at wdio.conf.js
* Declare where it is going to be located
```bash
const projectPath = require('path')
const androidAppPath = projectPath.join(process.cwd(), "app/android/Android-MyDemoAppRN.1.3.0.build-244.apk")
const iosAppPath = projectPath.join(process.cwd(),"app/ios/MyRNDemoApp.app");
```

* Set up the capabilities for Android(Emulator sample)
```bash
capabilities: [{
        "platformName": 'Android',
        "appium:deviceName": 'Demo',
        "appium:platformVersion": "11.0",
        "appium:automationName": "UIAutomator2",
        "appium:app": androidAppPath,
        // "appium:appWaitActivity": "com.swaglabsmobileapp.MainActivity"
    }],
```

* Install Appium in your project
```bash
    npm install --save-dev appium@next
```

* Check if the drivers are still available, if not install them again:
```bash 
appium driver list
```
```bash 
appium driver install xcuitest
appium driver install uiautomator2
```

* Run your scripts using
```bash
npx wdio
```

## Setup WebDriverIO
if you want to run this project:

1- Install all the system requirements

2- Clone the project

3- Run: npm i

4- Download the android app and place it under app/android or app/IOS

5- npm run wdioIOS/wdioAndroid

Home Test Assignment for Mobile Automation QA
-Automate the login functionality of a mobile application (attached .apk file) using Appium. 
-Supports iOS or Android native
Requirements:
⁃ The mobile application has a login screen where users can enter their username and password to
access the app. 
⁃ Write a test script that automates the login process and verifies whether the login is successful or
not.
Test Script:
⁃ Write a test script to automate the following steps:
⁃ Launch the mobile application.
⁃ Enter a valid username and password into the respective fields on the login screen.
⁃ Click on the login button.
⁃ Verify whether the login is successful by checking for the presence of a specific element on the next
screen after login (e.g., a welcome message or dashboard).
-Cover all positive and negative test cases for this login scenario.
-Use Appium and include a readme file with instructions on how to run
-Ensure that your code is following the Page object model design pattern and also has feature files
written in Cucumber BDD.
-Ensure your code can generate the reports.
-Ensure your code is well-organised with proper comments and coding guidelines being followed
-Share your code over your GitHub/BitBucket repo which is accessible for us to review along with the
recording for the successful test runs.
-The code should be written in JavaScript or Typescript using Webdriver IO and Appium.
Please use the attached .apk file and you can use the below test data.
Test Data:
LOGIN_USERS = {
  LOCKED: {
    username: &#39;alice@example.com&#39;,
    password: &#39;10203040&#39;,
  },
  NO_MATCH: {
    username: &#39;1@2.com&#39;,
    password: &#39;f-o-o&#39;,
  },
  NO_USER_DETAILS: {
    username: &#39;&#39;,
    password: &#39;&#39;,
  },
  NO_PASSWORD: {
    username: &#39;bob@example.com&#39;,
    password: &#39;&#39;,
  },
  STANDARD: {
    username: &#39;bob@example.com&#39;,
    password: &#39;10203040&#39;,
  },
}