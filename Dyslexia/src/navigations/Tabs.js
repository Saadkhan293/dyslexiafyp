import React, { useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { DrawerActions } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CaptureScreen from "../screens/CaptureScreen";
import HistoryScreen from "../screens/HistoryScreen";
import Drawers from "./Drawers";

const Tab = createBottomTabNavigator();
const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      top: -30,
      justifyContent: "center",
      alignItems: "center",
      ...styles.shadow,
    }}
  >
    <LinearGradient
      colors={["#aed3ec", "#3598DB", "#CDCFCE"]}
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#3598DB",
      }}
    >
      {children}
    </LinearGradient>
  </TouchableOpacity>
);
const Tabs = ({ navigation }) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          borderRadius: 10,
          height: 80,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                Top: 10,
              }}
            >
              <MaterialCommunityIcons
                name="home"
                size={30}
                style={{ color: focused ? "#3598DB" : "#05375a" }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                Top: 10,
              }}
            >
              <MaterialCommunityIcons
                name="account-circle"
                size={30}
                style={{ color: focused ? "#3598DB" : "#05375a" }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Capture"
        component={CaptureScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="camera"
              size={35}
              style={{ color: "black" }}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                Top: 10,
              }}
            >
              <MaterialCommunityIcons
                name="calendar"
                size={30}
                style={{ color: focused ? "#3598DB" : "#05375a" }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Drawers"
        component={Drawers}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                Top: 10,
              }}
            >
              <Ionicons
                name="settings-sharp"
                size={30}
                style={{ color: focused ? "#3598DB" : "#05375a" }}
              />
            </View>
          ),
        }}
        listeners={{
          tabPress: () => {
            navigation.dispatch(DrawerActions.toggleDrawer());
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
