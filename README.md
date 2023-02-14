# Machine_Round
Google Drive Link for APK :- https://drive.google.com/file/d/1D1Li3Y2vnaTwtvTR7CPiFsbFtQCSPWpY/view?usp=sharing

# Steps to generate signed APK

   1. Generate an upload key ( In MAC OS )**

   1.1 Paste this path in terminal :- /usr/libexec/java_home
   
   1.2 Navigate to the JDK Path obtain by the above cmd.
 
   1.3 Run "sudo keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000 " cmd there.

   Notes: The above command will generate a my-upload-key.keystore file.

  2. Setting the Gradle Variable

  2.1. Place the my-upload-key.keystore file under the android/ app directory in your project folder.
  
  2.2. Add these lines in the android/gradle.properties
       
      MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
      MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
      MYAPP_UPLOAD_STORE_PASSWORD=***** // replace the **** with your store password
      MYAPP_UPLOAD_KEY_PASSWORD=*****.   // replace the **** with your store key

   
  3. Add the signing config to your app's Gradle Config 

   3.1. Do the changes as shown below

      ...
       android {
        ...
        defaultConfig { ... }
        signingConfigs {
          release {
            if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
            storeFile file(MYAPP_UPLOAD_STORE_FILE)
            storePassword MYAPP_UPLOAD_STORE_PASSWORD
            keyAlias MYAPP_UPLOAD_KEY_ALIAS
            keyPassword MYAPP_UPLOAD_KEY_PASSWORD
           }
        }
      }
      buildTypes {
        release {
          ...
         signingConfig signingConfigs.release
       }
      }
    }
   ...

 4. Generate the release AAB
  
  To generate the My-App.abb which is ready to upload on google play store run the following command.

     cd android
    ./gradlew bundleRelease
