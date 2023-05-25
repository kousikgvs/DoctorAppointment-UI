import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import Sucess from "./Sucess";
import { Button } from "react-native";

let DaysList = [];
const BookAppointment = ({ navigation }) => {
  const [selectedSlot, setSelectedSlot] = useState(0);
  const [selectedGender, setSelectedGender] = useState(0);
  //   const [selected, setselected] = useState(false);
  const [selected, setselected] = useState(-1);

  useEffect(() => {
    console.log(new Date().getDate() + " " + new Date().getMonth() + 1);
    let days = getDays(new Date().getMonth() + 1);
    for (let i = 1; i < days; i++) {
      DaysList.push({ day: i, isSelected: false });
    }
  }, []);

  const getDays = (month) => {
    let days = 0;
    if (month == 1) {
      days = 31;
    } else if (month == 2) {
      days = 28;
    } else if (month == 3) {
      days = 31;
    } else if ((month = 4)) {
      days = 30;
    } else if ((month = 5)) {
      days = 31;
    } else if ((month = 6)) {
      days = 30;
    } else if ((month = 7)) {
      days = 31;
    } else if ((month = 8)) {
      days = 31;
    } else if ((month = 9)) {
      days = 30;
    } else if ((month = 10)) {
      days = 31;
    } else if ((month = 11)) {
      days = 30;
    } else if ((month = 12)) {
      days = 28;
    }
    return days;
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header screen="BookAppointment" text="Book Appointment" />
        <Image
          style={styles.bannerimg}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/387/387561.png",
          }}
        />

        <Text style={styles.name}>Doctor Jack</Text>
        <Text style={styles.spcl}>Skin Doctors</Text>

        {/* Select Data Area */}
        <Text style={styles.headertext}>Select Date</Text>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={DaysList}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    backgroundColor:
                      selected === index
                        ? "green"
                        : index < new Date().getDate() - 1
                        ? "red"
                        : "white",
                    borderWidth: 1,
                    padding: 20,
                    marginLeft: 10,
                    marginTop: 20,
                  }}
                  onPress={() => {
                    index >= new Date().getDate() - 1
                      ? setselected(index)
                      : alert("Unable to select the date");
                  }}
                  keyExtractor={({ item, index }) => index}
                >
                  <Text
                    style={{
                      color:
                        selected === index
                          ? "white"
                          : index < new Date().getDate() - 1
                          ? "white"
                          : "black",
                      fontSize: 24,
                      fontWeight: "700",
                    }}
                  >
                    {item.day}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <Text style={styles.headertext}>Available Slots</Text>
        <View
          style={{
            alignContent: "center",
          }}
        >
          <FlatList
            numColumns={2}
            data={[
              "10:00-12:00PM",
              "12:00-02:00PM",
              "02:00-04:00PM",
              "04:00-06:00PM",
              "06:00-08:00PM",
              "08:00-10:00PM",
            ]}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.timeSlot,
                    { borderColor: selectedSlot === index ? "blue" : "black" },
                  ]}
                  onPress={() => {
                    setSelectedSlot(index);
                  }}
                  keyExtractor={({ item, index }) => index}
                >
                  <Text
                    style={[
                      styles.slot,
                      { color: selectedSlot === index ? "blue" : "black" },
                    ]}
                    key={index}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <Text style={styles.headertext}>Patient Name</Text>
        <TextInput style={styles.input} placeholder={"Enter Your Name Here"} />
        <Text style={styles.headertext}>Select Gender</Text>
        <View style={styles.genderView}>
          <TouchableOpacity
            style={[
              styles.gender,
              {
                borderWidth: 1,
                borderColor: selectedGender === 0 ? "blue" : "black",
              },
            ]}
            onPress={() => {
              setSelectedGender(0);
            }}
          >
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/4139/4139981.png",
                width: 60,
                height: 60,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.gender,
              {
                borderWidth: 1,
                borderColor: selectedGender === 1 ? "blue" : "black",
              },
            ]}
            onPress={() => {
              setSelectedGender(1);
            }}
          >
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/6997/6997662.png",
                width: 60,
                height: 60,
              }}
            />
          </TouchableOpacity>
        </View>
        <Button
          style={styles.button}
          title="Book Now"
          onPress={() => {
            navigation.navigate("Success");
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bannerimg: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 50,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    alignSelf: "center",
    marginTop: 10,
    color: "slategray",
  },
  spcl: {
    fontSize: 20,
    fontWeight: "700",
    alignSelf: "center",
    marginTop: 10,
    backgroundColor: "#f2f2f2",
    color: "green",
    padding: 5,
    borderRadius: 10,
  },
  headertext: {
    fontSize: 22,
    fontWeight: "700",
    marginLeft: 20,
    marginTop: 10,
    color: "black",
    // alignSelf: "center",
  },
  timeSlot: {
    borderWidth: 0.5,
    width: "44%",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  slot: {
    fontSize: 15,
    fontWeight: "500",
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
  genderView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 10,
    marginBottom: 10,
  },
  gender: {
    padding: 5,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 20,
  },
  button: {
    borderWidth: 1,
    padding: 10,
    width: "100%",
    textAlign: "center",
    backgroundColor: "mediumblue",
    color: "mintcream",
    marginTop: 30,
    fontSize: 30,
    fontWeight: "700",
  },
});

export default BookAppointment;
