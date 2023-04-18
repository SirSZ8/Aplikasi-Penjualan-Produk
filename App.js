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

const ListItem = ({ item }) => {
  return (
    <TouchableOpacity
      onPress={() => Alert.alert("Barang", item.namaBarang)}
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "salmon",
        borderBottomWidth: 0.5,
        borderBottomColor: "white",
      }}
    >
      <View>
        <Text>{item.namaBarang}</Text>
        <Text>{item.kodeBarang}</Text>
      </View>
      <View>
        <Text>{item.hargaJual}</Text>
        <Text>{item.hargaBeli}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function App() {
  const [products, setProducts] = useState(DATA);
  const [isRefresh, setRefresh] = useState(false);

  const callAPI = () => {
    setRefresh(true);
    setTimeout(() => {
      setProducts(DATA);
      console.log("Refresh kepanggil");
      setRefresh(false);
    }, 1000);
  };

  const infiniteScroll = () => {
    setRefresh(true);
    setTimeout(() => {
      setProducts((values) => [...values, ...DATA_SERVER]);
      console.log("Refresh kebawah kepanggil");
      setRefresh(false);
    }, 3000);
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          onRefresh={callAPI}
          onEndReached={infiniteScroll}
          refreshing={isRefresh}
          data={products}
          style={{ flex: 1, backgroundColor: "blue" }}
          renderItem={({ item }) => <ListItem item={item} />}
          keyExtractor={(item, index) => index}
        />
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
    // flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
    paddingVertical: 32,
    gap: 8,
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
