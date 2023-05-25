// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./screens/Splash";
import Home from "./screens/Home";
import BookAppointment from "./screens/BookAppointment";
import Sucess from "./screens/Sucess";
import Completed from "./screens/Completed";
import Pemding from "./screens/Pemding";
import CallAmb from "./screens/CallAmb";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="BookAppointment"
          component={BookAppointment}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Success"
          component={Sucess}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Completed"
          component={Completed}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Pending"
          component={Pemding}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="CallAmb"
          component={CallAmb}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
