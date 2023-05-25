import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import { Image } from "react-native";

const Header = ({ screen, text }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={{
            uri:
              screen === "Home"
                ? "https://cdn-icons-png.flaticon.com/512/809/809957.png"
                : screen === "BookAppointment"
                ? "https://cdn-icons-png.flaticon.com/512/4514/4514867.png"
                : screen === "Completed"
                ? "https://cdn-icons-png.flaticon.com/512/3082/3082854.png"
                : screen === "Pending"
                ? "https://cdn-icons-png.flaticon.com/512/2972/2972543.png"
                : screen === "CallAmb"
                ? "https://cdn-icons-png.flaticon.com/512/2869/2869684.png"
                : "https://cdn-icons-png.flaticon.com/512/2869/2869684.png",
          }}
          style={styles.logo}
        />
        <Text style={styles.text}>{text}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    paddingTop: 40,
    height: 80,
    elevation: 5,
    flexWrap: "nowrap",
    alignContent: "center",
    paddingLeft: 20,
    paddingBottom: 10,
    //  background color - snow
    backgroundColor: "#fffafa",
    borderRadius: 10,
  },
  logo: {
    width: 29,
    height: 29,
    marginLeft: 5,
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: "500",
  },
});
