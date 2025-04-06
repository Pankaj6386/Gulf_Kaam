import React, { useState,useEffect } from "react";
import { 
  View, Text, TouchableOpacity, ImageBackground, StyleSheet 
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { AccessToken, LoginManager } from "react-native-fbsdk-next";
import ImagePath from "../../constant/ImagePath";

// Initialize Google Sign-In
GoogleSignin.configure({
  webClientId: "YOUR_GOOGLE_WEB_CLIENT_ID", // Get this from Firebase Console
});

const Login = () => {
  const navigation = useNavigation();
  const [message, setMessage] = useState("");
  useEffect(() => {
    // GoogleSignin.configure({
    //   webClientId: '280303258048-k3juuast2jufs7v6hdnc5n6gsn51qr0p.apps.googleusercontent.com',
    //   offlineAccess: true,
    // });
  }, []);
  // Function for Google Sign-In
  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
      setMessage("Google Sign-In successful!");
    } catch (error) {
      console.log("Google Sign-In Error:", error.message);
      setMessage("Google Sign-In failed. Try again.");
    }
  };

  // Function for Facebook Login
  const facebookLogin = async () => {
    try {
      const result = await LoginManager.logInWithPermissions(["public_profile", "email"]);
      if (result.isCancelled) {
        setMessage("Facebook Login cancelled.");
        return;
      }
      const data = await AccessToken.getCurrentAccessToken();
      if (!data) {
        setMessage("Facebook authentication failed.");
        return;
      }
      const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
      await auth().signInWithCredential(facebookCredential);
      setMessage("Facebook Login successful!");
    } catch (error) {
      console.log("Facebook Login Error:", error.message);
      setMessage("Facebook Login failed. Try again.");
    }
  };

  return (
    <ImageBackground
      source={ImagePath.splashTopRight}
      style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Login / Signup</Text>

        {/* Google Sign-In */}
        <TouchableOpacity onPress={googleLogin} style={[styles.button, { backgroundColor: "red" }]}>
          <Text style={styles.buttonText}>Login with Google</Text>
        </TouchableOpacity>

        {/* Facebook Login */}
        <TouchableOpacity onPress={facebookLogin} style={[styles.button, { backgroundColor: "blue" }]}>
          <Text style={styles.buttonText}>Login with Facebook</Text>
        </TouchableOpacity>

        {message ? <Text style={styles.errorText}>{message}</Text> : null}
      </View>
    </ImageBackground>
  );
};

// Styles
const styles = StyleSheet.create({
  background: {
    width: '100%', 
    height: '100%', 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center"
  },
  container: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    alignItems: "center"
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: "80%",
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontWeight: "bold"
  },
  errorText: {
    marginTop: 10,
    color: "red"
  }
});

export default Login;
