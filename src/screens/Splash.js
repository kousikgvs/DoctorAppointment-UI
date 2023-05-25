import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 3000);
  }, []);

  return (
    <View style={styles.conatiner}>
      <Text style={styles.text}>Doctor App</Text>
      <Image
        source={{
          uri: "https://webstockreview.net/images/clipart-doctor-phone-call-2.png",
        }}
        style={styles.logo}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column-reverse",
    backgroundColor: "#2f4f4f",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  text: {
    fontSize: 28,
    fontStyle: "normal",
    color: "#fff8dc",
    fontWeight: "500",
  },
});
