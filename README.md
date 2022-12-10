# AwesomeTemplate

## In Android:
To change the app name in react native first go to your project folder and open this path in VScode,
android/app/src/main/res/values/string.xml

Now you can easily change the app name in the string tag.
For example:

<string name="app_name">YOUR_APP_NAME</string>

After changing the app name, uninstall the previous app from your device and run these commands:

```
$ cd android

$ ./gradlew clean

$ cd ..

$ react-native run-android
```

## For IOS:

Open info.plist, change the value after the key to your app name. Eg.

```
<key>CFBundleDisplayName</key>

<string>My New App Name</string>
```

Now uninstall the previous app from your device. Run

$ npm install

$ pod install

Now simply, you can install the new app on your device.
Or you can also change the app name from Xcode.
Go to Xcode, open your project in Xcode, and find the targets tab. Select your project and change the hostname with your app name.

