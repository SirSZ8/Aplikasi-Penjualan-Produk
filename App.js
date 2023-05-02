import { StatusBar } from "expo-status-bar";
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
import { ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FormSignin />
    </ScrollView>
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
    backgroundColor: "#fff",
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
