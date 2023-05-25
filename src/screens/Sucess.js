import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Image } from "react-native";

const Sucess = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
          width: 120,
          height: 120,
        }}
      />
      <Text
        style={{
          marginTop: 25,
          fontWeight: "700",
          fontSize: 15,
          color: "gray",
        }}
      >
        Your Appointment is Successfully Booked
      </Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text style={styles.button}> Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Sucess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderWidth: 1,
    padding: 10,
    textAlign: "center",
    color: "mintcream",
    marginTop: 30,
    fontSize: 21,
    color: "gray",
    borderColor: "gray",
    fontWeight: "700",
    borderRadius: 10,
    alignSelf: "center",
  },
});
