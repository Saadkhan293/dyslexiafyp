import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DrawerOne = () => {
  return (
    <View style={styles.container}>
      <Text>Drawer One</Text>
    </View>
  );
};

export default DrawerOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
});
