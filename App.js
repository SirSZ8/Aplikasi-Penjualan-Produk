import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import ComponentPresentation from "./src/widgets/ComponentPresentation";

export default function App() {
  return (
    <>
      <View style={styles.heading}>
        <Text style={styles.text}>Good Night, Zeas</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.item1}>
          <Text>Lorem ipsum</Text>
        </View>
        <View style={styles.item2}>
          <Text>Dolor sit amet</Text>
        </View>
        <View style={styles.item3}>
          <Text>Dolor sit memet</Text>
        </View>
      </View>
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
    flex: 1,
    // backgroundColor: "blue",
    // alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 32,
    gap: 20,
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
