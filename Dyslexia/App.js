import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  Image,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import RootStackScreen from "./src/navigations/RootStackScreen";
const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
//Context API
import Auth from "./context/store/Auth"
export default function App() {
  console.log(require("./assets/logorm.png"));
  console.log(Dimensions.get("screen"));
  return (
    <Auth>
      <NavigationContainer>
        <RootStackScreen />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </NavigationContainer>
    </Auth>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  logo: {
    width: width / 3,
    height: height / 3,
  },
  footer: {
    flex: 1,
    backgroundColor: "red",
  },
});
