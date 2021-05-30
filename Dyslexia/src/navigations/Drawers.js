import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerOne from "../screens/drawer/DrawerOne";
import DrawerTwo from "../screens/drawer/DrawerTwo";
const DrawerApp = createDrawerNavigator();

const Drawers = () => {
  return (
    <DrawerApp.Navigator initialRouteName="DawerOne">
      <DrawerApp.Screen name="DawerOne" component={DrawerOne} />
      <DrawerApp.Screen name="DawerTwo" component={DrawerTwo} />
    </DrawerApp.Navigator>
  );
};

export default Drawers;
