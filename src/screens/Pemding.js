import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
const Pemding = () => {
  return (
    <View style={styles.container}>
      <Header screen="Pending" text="Pending Requests" />
      <View style={styles.body}>
        <Text
          style={{
            fontWeight: "800",
            fontSize: 18,
            color: "red",
          }}
        >
          There are No Pending Requests Currently
        </Text>
      </View>
    </View>
  );
};

export default Pemding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
