---set the path Java_home and android_home
npm install -g react-native-cli
Create Project
react-native init AwesomeProject
Latest version project gives the error
so install version 0.55.4
authentication
pushnotification 
react-native init PracticeDemo --version react-native@0.55.4
sanjeevmoga-cryptorn-46ce3e30a46d
cd AwesomeProject
run project
react-native run-android

------------------------
 SignIn = async () => {
        debugger;
        this.setState({ isLoggingIn: true });
        var formData = [];
        var encodedKey;
        var encodedValue;

        var params = {
            'grant_type': 'password',
            'username': this.state.username,
            'password': this.state.password
        };
        for (var property in params) {
            encodedKey = (property);
            encodedValue = (params[property]);
            formData.push(encodedKey + "=" + encodedValue);
        }
        formData = formData.join("&");
        fetch({ url: Api.Login }, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
            body: formData
        }).then((response) => response.json())
            .then(async (result) => {
              
                if (result.userName === this.state.username && this.state.password != null) {
                    AsyncStorage.setItem('usernamed', result.userName);
                    if (this.state.Check === true) {
                        const userDt = {
                            un: this.state.username,
                            ps: this.state.password
                        };
                        AsyncStorage.setItem('checkBoxValue', JSON.stringify(userDt));
                    } else {
                        await AsyncStorage.removeItem('checkBoxValue');
                    }
                    ToastAndroid.showWithGravity('Login Sucessfully', ToastAndroid.SHORT, ToastAndroid.CENTER);
                    this.setState({ isLoggingIn: false });
                    this.GetMemberDeatilsByUsername(result.userName);
                }
                else {
                    this.setState({ isLoggingIn: false })
                    ToastAndroid.showWithGravity('Error:Try again later', ToastAndroid.SHORT, ToastAndroid.CENTER);
                }
            }).catch((error) => {
                ToastAndroid.showWithGravity(`Something went wrong ${error}`, ToastAndroid.SHORT, ToastAndroid.CENTER);
            });

    }
    ----------------------
const width = Dimensions.get('window').width;
-------------
57 verion babel error
npm add @babel/runtime
-----------------------
If give some sdk error then open project in android studio,and installed it

---------------
vector-icons 
npm install react-native-vector-icons --save
---------------------

flex-
it gives the space for remaaning

--------------------
Create Project  
	react-native init pushnotification --version react-native@0.55.4
	react-native init keyboard --version react-native@0.52.0

change version for current react native version
npm install --save react-native@0.55.4
npm install --save react-native-device-info@0.11.0 

-------------------------------------------
install react-native navigation package
npm install --save react-navigation
npm install --save react-navigation@^2.9.3

-------------------------------
install swipeOut package
npm install --save react-native-swipeout
------------------------------
npm install react-native-modalbox@latest --save
npm install --save react-native-button-component
-------------------------------

-----------------
css property
fontSize:20,
textAlign:'center'

OverlayConatiner{
	backgroundColor:'rgba(47,163,218,4)'
}
---------------------
npm install react-native-search-filter --save
------------------------
center align property
 viewPagerStyle: {
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
    },

https://github.com/crazycodeboy/react-native-splash-screen.git

---------------------------------------------------------------
Warning:
1)invalid child context virtualized cell.cell key of type number
	solution: <FlatList 
		      keyExtractor={(item) => item.toString()} />

2)is_Mounted() is deprected
	Solution:	
		import { YellowBox } from 'react-native';
		YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

---------------------------------------------------------------
npm install --save redux
npm install --save react-redux

Create Directory actions,components,containers,reducers  inside project folder

first call the action so create action
action call the reducer 
create reducers
--------------------------------
https://www.npmjs.com/package/prop-types
npm install --save react-native-firebase

--------------------------------------

react-native link react-native-firebase
react-native unlink react-native-firebase

https://medium.com/react-native-training/react-native-firebase-authentication-7652e1d2c8a2
-----------------------------------------------
firebaseExample

Error:Could not read path 'E:\Kiran\authenticationdemo\android\app\build\generated\source\buildConfig\debug\com\authenticationdemo'.
> E:\Kiran\authenticationdemo\android\app\build\generated\source\buildConfig\debug\com\authenticationdemo

--------------------------------------
Objects are not valid as a React child (found: object with keys {$$typeof, type, key, ref, props, _owner, _store}). If you meant to render a collection of children, use an array instead
Solution :  npm install --save firebase@4.9.1
----------------------------------------
facebook login
npm install react-native-fbsdk@0.6.0
$ react-native install react-native-google-signin
-----------------
npm view react-native version
-------------------
kirandesai303@gmail.com
kiran1610
 <GoogleSigninButton
 "react-native-fbsdk": "^0.6.0",

https://developers.google.com/identity/sign-in/android/start-integrating
--------------------------------------
Get SH1 key
keytool -list -v -keystore C:\Users\NS-44\.android\debug.keystore -alias androiddebugkey -storepass android -keypass android

SH1 key : 8B:76:EE:1F:2C:70:E9:57:8D:2E:3D:88:09:A9:71:0A:88:90:68:9E

-----------------------------------------------------------------------------------------------------------------
https://console.developers.google.com/apis/credentials?project=authentication-213511&folder&organizationId
https://developers.google.com/identity/sign-in/android/start-integrating
https://www.youtube.com/watch?v=sT3hcMsRF68
--------------------------------------
 var config = {
            apiKey: "AIzaSyBczFm_UYllQ6rthpuYsb_FmZtryksm7Ow",
            authDomain: "authentication-213511.firebaseapp.com",
            databaseURL: "https://authentication-213511.firebaseio.com",
            projectId: "authentication-213511",
            storageBucket: "authentication-213511.appspot.com",
            messagingSenderId: "163920992441"
          };
          firebase.initializeApp(config);	

---------------------------
sh1 key generate command
-----------------------
keytool -exportcert -alias androiddebugkey -keystore %HOMEPATH%\.android\debug.keystore | C:\Users\NS-44\Downloads\openssl-0.9.8k_X64\bin\openssl.exe sha1 -binary | C:\Users\NS-44\Downloads\openssl-0.9.8k_X64\bin\openssl.exe base64
ga0RGNYHvNM5d0SLGQfpQWAPGJ8=
----------------------------
debug :
http://localhost:8081/debugger-ui/
-------------------
Problem site
https://blog.pusher.com/debugging-react-native-android/
--------------------

21.183729, 72.783175
21.183222, 72.783213
21.183344, 72.783001
21.183280, 72.783033
 {latitude: lat, longitude: long},
 {latitude: childData.latitude, longitude:childData.longitude}
-------------------------
npm install eslint
npm install standard@latest -g
npm install ajv-keywords
----------------------------------
Facebook Signin
install and add the library
give the error for expt
for that change version 0.27.3
Now change on mainActivit and mainapplication.java file
Error: Sdk Has Not Been Initialized FacebookSdk.sdkInitialize()
Solu : 
  @Override
  public void onCreate() {
    super.onCreate();
    FacebookSdk.setApplicationId("301836980368844");
    FacebookSdk.sdkInitialize(this);
    SoLoader.init(this, /* native exopackage */ false);
    AppEventsLogger.activateApp(this);

  }
----------------------------------
Generate release apk key SHA1 command:
keytool -exportcert -keystore E:/Kiran/googlePhotos/android/app/my-release-key.keystore -list -v
E0:32:87:2C:ED:88:95:44:75:20:69:5B:99:D3:45:61:DB:8C:F0:9A

BF:2C:3B:FF:D5:93:6C:48:E4:44:17:21:DC:A3:D6:D2:6F:79:A0:9B
-----------------------------
Run apk file command:
react-native run-android --variant=release
----------------------------
fb button style
https://reactnativecode.com/put-image-icon-inside-button/
------
----------------

token google
Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5NjQ4ZTAzMmNhYzU4ND…9BVBrpJ9xmAI9QTj1kmMOpVZV9BDp2EPw3BolOzUVajlhIQpA

<View style={{ height: 1, backgroundColor: '#4caf50', marginLeft: 10, marginRight: 10, borderRadius: 10 }}>
----------------
Use of tab navigation,stack navigation and drawer navigation
https://gitlab.com/readybytes/ReactNavigationExampleVersion2/tree/master
-----------------------------------------
Get the image from Gallery and Camera
-----------------------------------
https://c1ctech.com/react-native-image-picker-example/
---------------------------------
<Button
          containerStyle={{ padding: 10, height: 45, overflow: 'hidden', marginLeft: 20, marginRight: 20, borderRadius: 4, backgroundColor: '#2b9e88' }}
          disabledContainerStyle={{ backgroundColor: 'grey' }}
          style={{ fontSize: 15, color: 'white', justifyContent: 'center' }}>
          Add Writer
        </Button>
------------------------
https://www.youtube.com/watch?v=1tgWuND9Vfg&list=PLWBrqglnjNl2yaCcp0HEAWp6zBIfingZ-
-------------
https://stackoverflow.com/questions/37206369/react-native-number-of-components-in-one-row
----------------------
Set the fix orientation in AndroidManifest file
android:screenOrientation="portrait"
android:screenOrientation="landscape"
-------------------------
Error:Can not find CompileOnly
Solu:Replace "compileOnly" with "provided" 
-----------------
21.190353, 72.798010
----------------
Get the Google Api key
-------------------
https://console.cloud.google.com/google/maps-apis/overview
https://github.com/react-community/react-native-maps
---------------
npm install react-native-fbsdk@0.6.0

npm install react-native-maps@0.21.0 --save
------------------------
npm install react-native-maps --save
react-native link react-native-maps
--------------
react-native init authentication --version react-native@0.55.4
---
npm install --save react-native@0.55.4
---------
For facebook error
configurations.all {
            resolutionStrategy {
                force 'com.facebook.android:facebook-android-sdk:4.28.0'
            }
        }
allprojects {
    repositories {}}

--
For Google Error

------
For google and fbsignin
http://knowledge-cess.com/react-native-social-authentication-using-firebase-google-and-facebook-signin-signup-a-step-by-step-guide/
https://github.com/react-community/react-native-maps/blob/master/docs/installation.md

http://prntscr.com/la7hqy
http://prntscr.com/la7hx9
http://prntscr.com/lac2wg
------
react-native tut
https://aboutreact.com/handling-android-back-button-press/
--------------
react-native maps
https://itnext.io/install-react-native-maps-with-gradle-3-on-android-44f91a70a395
-------------
I have work on get the current location using react-native-google,
in that I have facing many issues for versioning and still i am try to solved problems.
I have refrer many sites but did not getting any sucess.
Sites : https://itnext.io/install-react-native-maps-with-gradle-3-on-android-44f91a70a395
	https://github.com/react-community/react-native-maps
	https://stackoverflow.com/questions/38041466/cannot-resolve-symbol-callbackmanager-facebook-sdk-4-0s-lib

Error: 	http://prntscr.com/la7hqy
	http://prntscr.com/la7hx9
	http://prntscr.com/lac2wg

--------------------------------
I have to create seperate project for react-native-maps
and it can be sucessfully run 
Screenshot :http://prntscr.com/laqvrw

But My task is after google and facebook login,
google and facebook login is already done but for
showing map,in that have many issues
regrading to package.I did't find solution for sucess output.

Error: http://prntscr.com/lapffk
Refer sites:
https://stackoverflow.com/questions/47146694/the-specified-android-sdk-build-tools-version-26-0-0-is-ignored
https://github.com/react-native-community/react-native-camera/issues/1532

--------------------------
npm install react-native-maps --save
------------------
dependencies {
   // compile project(':react-native-maps')
    //compile project(':react-native-fbsdk')
    implementation project(':react-native-fbsdk')
//    compile project(':react-native-google-signin')
    implementation(project(":react-native-google-signin")){
        exclude group: "com.google.android.gms" // very important
    }
    implementation 'com.google.android.gms:play-services-auth:9.2.1'
    implementation fileTree(dir: "libs", include: ["*.jar"])
    implementation "com.android.support:appcompat-v7:27.0.1"
    implementation "com.facebook.react:react-native:+"  // From node_modules
//    implementation 'com.facebook.android:facebook-android-sdk:4.0.0'
    implementation 'com.facebook.android:facebook-android-sdk:4.28.0'


    implementation(project(':react-native-maps')){
    exclude group: 'com.google.android.gms', module: 'play-services-base'
    exclude group: 'com.google.android.gms', module: 'play-services-maps'
  }
  implementation 'com.google.android.gms:play-services-base:9.2.1'
  implementation 'com.google.android.gms:play-services-maps:9.2.1'


}
--------------------------
allprojects {
    repositories {
        mavenLocal()
        jcenter()
        maven {
            // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
            url "$rootDir/../node_modules/react-native/android"
        }
        maven {
            url 'https://maven.google.com/'
            name 'Google'
        }
        configurations.all {
            resolutionStrategy {
                force 'com.facebook.android:facebook-android-sdk:4.28.0'
//                force 'com.android.support:support-v7:27.0.1'
            }
        }
//        tasks.withType(JavaCompile) {
//            options.compilerArgs << "-Xlint:unchecked" << "-Xlint:deprecation"
//        }
        project.configurations.all {
            resolutionStrategy.eachDependency { details ->
                if (details.requested.group == 'com.android.support'
                        && !details.requested.name.contains('multidex') ) {
                    details.useVersion "27.0.1"
                }
            }
        }
    }
    }

--------
npm install -g npm 
-----------
Solve the versioning error for react-native-maps.
How to solve Google Play Services version collision in gradle dependencies
Refersites:
https://github.com/googlemaps/android-maps-utils/issues/258
https://medium.com/@suchydan/how-to-solve-google-play-services-version-collision-in-gradle-dependencies-ef086ae5c75f
  
Integrate react-native-maps with react-native-googleSignIn and react-native-fbsdk.
Screenshot: https://prnt.sc/lbsihb
------------------------------------
react-native-maps
https://medium.com/@princessjanf/react-native-maps-with-direction-from-current-location-ab1a371732c2

------------------------------------
Get the current location after facebook and google SignInn using react-native-map.
Refersites
https://itnext.io/install-react-native-maps-with-gradle-3-on-android-44f91a70a395
https://github.com/react-community/react-native-maps

search for about next task-
get the nearby users(around in 2km) using react-native-maps
---------
In react-native-maps add the markers and 
work on getting user proper current location.
Screenshot:
http://prntscr.com/ld4ex4
-------
Search about nearby users but still not getting any success.
Refersite
https://developers.google.com/contacts/v3/
https://medium.com/@princessjanf/react-native-maps-with-direction-from-current-location-ab1a371732c2
https://github.com/react-community/react-native-maps/issues/505
-----------
Search about NearBy user and Push Notification.
Implement Push Notification but in that have some error
Refersites:
https://medium.com/@anum.amin/react-native-integrating-push-notifications-using-fcm-349fff071591
https://github.com/zo0r/react-native-push-notification
https://firebase.google.com/docs/cloud-messaging/android/client
-----------------
Implement Push Notification but in that have still versioning issue.
ReferSite
https://www.youtube.com/watch?v=2FjrLoAfpaI
https://github.com/evollu/react-native-fcm/blob/master/Examples/simple-fcm-client/app/FirebaseClient.js
https://stackoverflow.com/questions/35435222/aapt-exe-finished-with-non-zero-exit-value-1
---------------------------------------------
https://medium.com/mindorks/firebase-realtime-database-with-react-native-5f357c6ee13b

---------------------------------------
Error : Release APK file not showing google maps
Solution : add sh1 key for release mode apk

---------------------------------------------
1) Setup Xamarin Native Android solution/projects

2) Create view as per the attached design
3) Use static json to load and save all data: Title, Created Date, Location, Writers

4) User should be able to change values of  Title, Created Date, Location.

5) Create interactions:
  a) "Invite New Writer" will add new Writer with Status pending (...)  
 Writer should be able to enter name.

  b) Write can click on their picture to change picture by selecting picture from phone library or by taking picture with camera.
 
 c)  "Split Equally" will assign equal percentage to all writers.
-------------------------------------------------
error : In release apk does not show the map
Solution : add sh1 key for release keystore
-------------------------
Searching
https://medium.freecodecamp.org/how-to-build-a-react-native-flatlist-with-realtime-searching-ability-81ad100f6699
-------------------------
currentLocation
https://www.youtube.com/watch?v=MqLC0kOqrwk
------------------------
react-native autoComplte
https://www.youtube.com/watch?v=UFiTL8lAktU
-----------------------
^4.3.0
npm install --save react-native-firebase@4.3.0
------------
https://github.com/react-community/react-native-maps/issues/278
https://github.com/manuelbieh/geolib
https://stackoverflow.com/questions/50262743/getting-distance-in-miles-from-current-position

----------------------------------
Push Notification using react-native-firebase
https://rnfirebase.io/docs/v5.x.x/installation/android
-----------------------------------
Implement push notification using react-native-firebase.
Refersite
https://rnfirebase.io/docs/v5.x.x/messaging/receiving-messages
https://www.youtube.com/watch?v=rJesac0_Ftw
---
Screenshot
https://prnt.sc/llkv1v
----
when we dont want to store the data in state ate that time
used
var that=this 
and then store it
---
working on getting near by users and
implement tab navigation with stack naviagtion.
Refersites:
https://reactnavigation.org/docs/en/tab-based-navigation.html
https://medium.com/async-la/react-navigation-stacks-tabs-and-drawers-oh-my-92edd606e4db
-------------
Material Ui Components
Dropdown :
 https://www.npmjs.com/package/react-native-material-dropdown
TextField:
https://www.npmjs.com/package/react-native-material-textfield
Menu
https://github.com/mxck/react-native-material-menu
-------------------
import FloatingLabel from "react-native-floating-labels";
<FloatingLabel
                            labelStyle={styles.labelInput}
                            inputStyle={styles.input}
                            style={styles.formInput}
                            returnKeyType={"next"}
                            onChangeText={text => this.setState({ username: text })}
                        >USERNAME</FloatingLabel>
                        <Text style={{ color: 'red', textAlign: 'left', fontSize: 15 }}>{this.state.ErrorUsername}</Text>
                        
                        <FloatingLabel
                            labelStyle={styles.labelInput}
                            inputStyle={styles.input}
                            style={styles.formInput}
                            onChangeText={text => this.setState({ password: text })}
                            secureTextEntry={true}
                        >PASSWORD</FloatingLabel>
                        <Text style={{ color: 'red', textAlign: 'left', fontSize: 15 }}>{this.state.ErrorPassword}</Text> 
----------------------------
Google Photos
https://developers.google.com/photos/library/guides/create-albums?refresh=1
-----------------------
Collasps
https://github.com/sanpyaelin/react-native-collapse-view/blob/master/example/index.js
---------------------------
---------------------------
DPRS admin crenditals:
DPRS URL api
http://api.dprs.natrixsoftware.com/Help
admin@natrixsoftware.com
Admin@2018
------------------------
------------------------
Login using getting token using api
--------------------
Backup
inside docum/DPRS
-------------
BottomSheet,ActionSheet
---------
http://dprs.natrixsoftware.com/#/admin/daily-activity-report
------------
http://prntscr.com/lr1lby
http://dprs.natrixsoftware.com/#/admin/login

-----------------------------
classpath 'com.google.gms:google-services:3.2.1'
--------------------------------
uncompiled PNG file passed as argument. Must be compiled first into .flat file.. error: failed parsing overlays.
Solution: 
1)add in gradlew.propeties file
android.enableAapt2=false

2)Change assetPathUtil.js file code:
Change assetPathUtil.js file code:
before:

function getAndroidAssetSuffix(scale: number): string {
   switch (scale) {
     case 0.75: return 'ldpi';
     case 1: return 'mdpi';
     case 1.5: return 'hdpi';
     case 2: return 'xhdpi';
     case 3: return 'xxhdpi';
     case 4: return 'xxxhdpi';
   }
   throw new Error('no such scale');
}
after:

// fix upgrade android gradle version from 2 to 3 
function getAndroidAssetSuffix(scale) {
   switch (scale) {
      case 0.75: return 'ldpi-v4';
      case 1: return 'mdpi-v4';
      case 1.5: return 'hdpi-v4';
      case 2: return 'xhdpi-v4';
      case 3: return 'xxhdpi-v4';
      case 4: return 'xxxhdpi-v4';
   }
}
The file path is node_modules\react-native\local-cli\bundle\assetPathUtils.js


3)Delete the folder android/app/build/intermediates/res/merged/release/drawable-xhdpi. It will cause the duplicate error if your gradle version upgrade to 3.

4)That's it and don't forget ./gradlew clean before ./gradlew assembleRelease.

-----------------------------
when create debug apk give error for index.js
Solution:
https://medium.com/@adityasingh_32512/solved-unable-to-load-script-from-assets-index-android-bundle-bdc5e3a3d5ff

json to cSharp
------------------------
Sum of Time using javascript
https://stackoverflow.com/questions/26056434/sum-of-time-using-javascript

-------------------------
Inside View ternary condition
https://stackoverflow.com/questions/38084658/ternary-operator-in-jsx-to-include-html-with-react
----------------------------
React native pincode compo
https://reactnativeexample.com/convenient-and-quick-forming-pinview-component-for-react-native/
----------------------
when scrollview work not proper
give style in scrollview
<ScrollView style={styles.insideView} contentContainerStyle={{ flexGrow: 1 }}>
---------------------------
offline acess
https://medium.com/dailyjs/offline-notice-in-react-native-28a8d01e8cd0
------------------
In native-base component,icon is not saved then solution:
react-native link
--------------------
Encountered two children with the same key, `[object Object]`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.
Solutoin in FlatList : 
keyExtractor={(item,index) => index.toString()}
--------------------------
ext {
    buildToolsVersion = "27.0.3"   // UPGRADE VERSION
    minSdkVersion = 16
    compileSdkVersion = 26
    targetSdkVersion = 26
    supportLibVersion = "26.1.0"
}
--------------------------------------
react native axios for http Client
https://alligator.io/react/axios-react/
-------------------------------------
Swipeout
https://github.com/dancormier/react-native-swipeout
https://github.com/dancormier/react-native-swipeout/blob/master/example/SwipeoutExample.js
-------------------------------------
Run in IOS device
https://stackoverflow.com/questions/38495793/run-react-native-application-on-ios-device-directly-from-command-line
https://dev.to/iverve/how-to-deploy-react-native-app-546n
----------------------------------------------------
navigation header change:
https://www.youtube.com/watch?v=Lvag_yCkkEk&list=PLWBrqglnjNl2yaCcp0HEAWp6zBIfingZ-&index=47
--------------------------------------------------
Cocopods :
https://shift.infinite.red/beginner-s-guide-to-using-cocoapods-with-react-native-46cb4d372995
-----------------------------------------------
Set the sdk environment variable in mac
Go to the home directory
-open terminal
Write clear command

Open bash_profile
	- vi ./bash_profiles
	- export ANDROID_HOME=/Users/ns-mac-mini/Library/Android/sdk 
	export PATH=$PATH:$ANDROID_HOME/tools 
	export PATH=$PATH:$ANDROID_HOME/tools/bin
	export PATH=$PATH/:$ANDROID_HOME/platform-tools
Press Esc :wq for quit window

Write source ./bash_profiles
Now write adb command
------------------------------------------
react-redux tutorial link:
https://www.youtube.com/watch?v=OxIDLw0M-m0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG

https://medium.com/@imranhishaam/react-native-with-redux-for-beginners-6281959a2899
https://redux.js.org/
https://www.youtube.com/watch?v=KcC8KZ_Ga2M&t=373s
---------------------
diff between this.state and this.setState
this.state is intialized value and it can not change
but use of setstate change value
------
a=10
b=a
b=20
a=?,b=?
a=10,b=20
--------------
let a={
age=10
}
let b=a;
b.age=20
a=?,b=?
a=10,b=10
----------

let a={age:10}
let b=a
b=20

console.log('a',a)
console.log('b',b)
-------
https://www.youtube.com/watch?v=Hn2acItzQBk
-------------------------------
create ipa and apk file in react native
https://medium.com/@tunvirrahmantusher/create-ipa-and-apk-from-react-native-72fe53c6a8db
--------------------------
why javascript object takes reference when assign to variable:
-------------------------
Redux steps
1) create store
	-create reducer pass into createStore
2) pass reducers to store
3)create action
	- actionType
	-index ->Perform the opertion that have you want
		-like for insert record create function
action is sent to reducer-
4)Create Reducers
	-Accordin to action type update state
5)Create Components
6)Container is the outer part of component.
	-It is used for mapdispatchToProps and mapDispatchToState

---------------------------------
When a textinput focuses, how to avoid pushing a view up and overlay it instead?
https://stackoverflow.com/questions/50979792/when-a-textinput-focuses-how-to-avoid-pushing-a-view-up-and-overlay-it-instead


-------------------------------------
LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY LT',
      LLLL: 'dddd D MMMM YYYY LT'
------------------------
for background notification setting 
inside manifiest file write:
 <receiver android:name="com.dieam.reactnativepushnotification.modules.RNPushNotificationPublisher" />  
------------------------
Swipeout
 https://github.com/dancormier/react-native-swipeout/blob/master/example/SwipeoutExample.js 
------------
in 0.55.4 project 
build the 23.0.3
--------
In 0.59.3 project 
build the 28.0.3
for react-navigation error:
react-native-gesture install
-----------  
Proguard is a tool that can slightly reduce the size of the APK
To enable Proguard, edit android/app/build.gradle --         
def enableProguardInReleaseBuilds = true            
--------------------
http://prntscr.com/n9lg6p   
--------------------
https://github.com/shoumma/react-native-off-canvas-menu
--------
startAnimation() {
  Animated.timing(this._animatedValue, {
    toValue: 100,
    duration: 1000,
  }).start(() => {
    this.startAnimation();
  });
}

--------------                      
