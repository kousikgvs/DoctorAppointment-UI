import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Header from "../components/Header";
const CallAmb = () => {
  return (
    <View style={styles.container}>
      <Header screen={CallAmb} text="Call Ambulance" />
      <TextInput style={styles.input} placeholder={"Enter Your Address"} />
      <Text style={styles.button}>Call Now</Text>
    </View>
  );
};

export default CallAmb;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: "center",
    width: "90%",
    height: 45,
    marginTop: 10,
    paddingLeft: 20,
  },
  button: {
    width: "30%",
    height: 50,
    marginTop: 10,
    alignSelf: "center",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    textAlign: "center",
    borderRadius: 10,
    backgroundColor: "mediumblue",
    color: "mintcream",
    fontSize: 20,
    fontWeight: "700",
  },
});
