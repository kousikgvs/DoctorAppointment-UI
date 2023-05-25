import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import Header from "../components/Header";
const Completed = () => {
  return (
    <View style={styles.container}>
      <Header screen="Completed" text="Completed Appointments" />

      <View>
        <FlatList
          data={["1", "2", "3", "4", "5"]}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity style={styles.item}>
                <TouchableOpacity style={{}}>
                  <Image
                    style={styles.docimg}
                    source={{
                      uri: "https://cdn-icons-png.flaticon.com/512/387/387561.png",
                      width: 60,
                      height: 60,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginLeft: 25,
                    marginTop: 10,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "900",
                    }}
                  >
                    DOCTOR XYZ
                  </Text>
                  <Text
                    style={{
                      fontWeight: "500",
                      marginTop: 5,
                    }}
                  >
                    8:53 PM
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    marginLeft: 25,
                    marginTop: 10,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "900",
                      color: "green",
                      marginTop: 10,
                    }}
                  >
                    Completed
                  </Text>
                </TouchableOpacity>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Completed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    height: 100,
    width: "90%",
    backgroundColor: "#87ceeb",
    alignSelf: "center",
    marginTop: 15,
    flexDirection: "row",
    padding: 20,
    borderWidth: 0.6,
    elevation: 5,
    backgroundColor: "#f5fffa",
  },
});
