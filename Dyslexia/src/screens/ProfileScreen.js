import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProfileScreen = ({ navigations }) => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#aed3ec",
  },
});
