import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CaptureScreen = ({ navigations }) => {
  return (
    <View style={styles.container}>
      <Text>Capture Screen</Text>
    </View>
  );
};

export default CaptureScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#aed3ec",
  },
});
