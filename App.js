import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";
import ComponentPresentation from "./src/widgets/ComponentPresentation";
import DATA from "./DATA";
import DATA_SERVER from "./DATA_SERVER";
import FormSignin from "./src/widgets/FormSignin";
import { ScrollView, StatusBar } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import ScreenProductDetail from "./src/screens/products/ScreenProductDetail";
import ScreenPenjualanCreate from "./src/screens/penjualan/ScreenPenjualanCreate";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenPenjualanSuccess from "./src/screens/penjualan/ScreenPenjualanSuccess";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor="#fff"
        barStyle={"dark-content"}
        // showHideTransition={statusBarTransition}
        // hidden={hidden}
        animated={true}
      />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="ScreenPenjualanCreate"
            component={ScreenPenjualanCreate}
          />
          <Stack.Screen
            name="ScreenPenjualanSuccess"
            component={ScreenPenjualanSuccess}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  heading: {
    marginTop: 50,
    marginHorizontal: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
  container: {
    // flex: 1,
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    // backgroundColor: "#fff",
    // alignItems: "center",
    // flexDirection: "row",
    // justifyContent: "center",
    // marginVertical: 20,
    paddingVertical: 20,
    // gap: 8,
    marginHorizontal: 24,
    // marginTop: 50,
  },
  item1: {
    height: "20%",
    backgroundColor: "grey",
    padding: 10,
    borderRadius: 10,
  },
  item2: {
    height: "20%",
    backgroundColor: "grey",
    padding: 10,
    borderRadius: 10,
  },
  item3: {
    height: "20%",
    backgroundColor: "grey",
    padding: 10,
    borderRadius: 10,
  },
});
