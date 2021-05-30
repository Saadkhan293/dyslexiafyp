import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import * as Animatable from "react-native-animatable";
const SplashScreen = ({ navigation }) => {
  const [speak, setSpeak] = useState(true);
  const UpdateSpeak = () => {
    setSpeak(!speak);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require("../../assets/logo.jpg")}
          style={styles.logo}
        />
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.title}>Welcome</Text>

          <TouchableOpacity onPress={UpdateSpeak}>
            {speak ? (
              <FontAwesome5 name="volume-up" color="#05375a" size={30} />
            ) : (
              <FontAwesome5 name="volume-mute" color="#05375a" size={30} />
            )}
          </TouchableOpacity>
        </View>

        <Text style={styles.text}>Help to improve speech sounds</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
            <LinearGradient
              colors={["#aed3ec", "#CDCFCE"]}
              style={styles.signIn}
            >
              <Text style={styles.textSign}>Get Started</Text>
              <MaterialIcon name="navigate-next" color="#05375a" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;
const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;
console.log("statusBarHeight: ", StatusBar.currentHeight);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aed3ec",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
    borderRadius: height_logo / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "black",
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    marginTop: 5,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "#05375a",
    fontWeight: "bold",
  },
  speakerIcon: {},
});
