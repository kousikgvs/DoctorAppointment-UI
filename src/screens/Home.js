import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Button,
  ScrollView,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Splash from "./Splash";

const Home = ({ navigation }) => {
  return (
    <View style={styleSheet.container}>
      <ScrollView style={styleSheet.container}>
        <View style={styleSheet.container}>
          <Header text="Home" screen="Home" />
          <Image
            source={{
              uri: "https://static.vecteezy.com/system/resources/previews/000/425/873/non_2x/vector-set-of-doctor-and-nurse-cartoon-characters.jpg",
            }}
            style={styleSheet.banner}
          />

          <View style={styleSheet.category}>
            {/* This is for Select Category */}
            <Text style={styleSheet.headertext}>Select Category</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={[1, 2, 3, 4, 5, 6, 7, 8]}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity>
                    <View style={styleSheet.linearGradient}>
                      <Text style={styleSheet.CatName}>
                        {"Category-" + item}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>

          <View style={styleSheet.toprated}>
            {/* This is for Top Rated DOctors */}
            <Text style={styleSheet.headertext}>Top Rated Doctors</Text>
            <FlatList
              numColumns={2}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={[1, 2, 3, 4, 5, 6, 7, 8]}
              renderItem={({ item, index }) => {
                return (
                  <View style={styleSheet.docView}>
                    <Image
                      style={styleSheet.docimg}
                      source={{
                        uri: "https://cdn-icons-png.flaticon.com/512/387/387561.png",
                      }}
                    />
                    <Text style={styleSheet.docname}>Doctor {index + 1}</Text>
                    <Text style={styleSheet.docspec}>Skin Specalist</Text>
                    <Text
                      style={[
                        styleSheet.status,
                        {
                          color: index / 2 == 0 ? "green" : "red",
                          opacity: index / 2 == 0 ? 1 : 0.5,
                        },
                      ]}
                    >
                      {index / 2 == 0 ? "Available" : "Busy"}
                    </Text>
                    <TouchableOpacity>
                      <Text
                        style={[
                          styleSheet.button,
                          {
                            backgroundColor: index / 2 == 0 ? "green" : "red",
                          },
                        ]}
                        onPress={() => {
                          if (index / 2 === 0) {
                            navigation.navigate("BookAppointment");
                          } else {
                            alert("Appointments are Busy , Please Try Again");
                          }
                        }}
                      >
                        Book Appointment
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
      {/* Bottom Nav Bar */}
      <View style={styleSheet.bottomNavbar}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Completed");
          }}
        >
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3082/3082854.png",
            }}
            style={styleSheet.image}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Pending");
          }}
        >
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2972/2972543.png",
            }}
            style={styleSheet.image}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CallAmb");
          }}
        >
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2869/2869684.png",
            }}
            style={styleSheet.image}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5fffasss",
  },
  banner: {
    width: "90%",
    height: 240,
    marginBottom: 10,
    marginTop: 12,
    borderRadius: 20,
    alignSelf: "center",
  },
  headertext: {
    fontSize: 22,
    fontWeight: "700",
    marginLeft: 20,
    alignSelf: "center",
  },
  linearGradient: {
    width: 120,
    height: 95,
    borderRadius: 10,
    marginLeft: 10,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00bfff",
    elevation: 6,
    borderColor: "#f5fffa",
  },
  CatName: {
    color: "black",
    fontSize: 18,
    fontWeight: "600",
  },
  category: {
    marginTop: 10,
  },
  toprated: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  docView: {
    width: "46%",
    height: 240,
    borderRadius: 10,
    borderWidth: 0.2,
    marginLeft: 10,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0ffff",
    elevation: 6,
    borderColor: "#f5fffa",
  },
  docItem: {
    fontSize: 18,
    fontWeight: "600",
  },
  docimg: {
    width: 80,
    height: 80,
    paddingTop: 10,
  },
  docname: {
    fontSize: 20,
    fontWeight: "500",
    paddingTop: 10,
  },
  docspec: {
    backgroundColor: "#f5f5f5",
    fontSize: 15,
    fontWeight: "500",
    color: "green",
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 2,
    paddingRight: 2,
  },
  status: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
    // borderWidth: 0.4,
    // borderRadius: 5,
    // padding: 10,
  },
  button: {
    borderWidth: 1,
    padding: 5,
    width: "80%",
    textAlign: "center",
    borderRadius: 10,
    backgroundColor: "mediumblue",
    color: "mintcream",
  },
  bottomNavbar: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "white",
    position: "absolute",
    alignSelf: "center",
    bottom: 10,
    elevation: 10,
    borderWidth: 0.4,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  image: {
    width: 35,
    height: 35,
    marginLeft: 20,
  },
});

export default Home;
