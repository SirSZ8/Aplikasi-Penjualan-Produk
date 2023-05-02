import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function FormSignin() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (value, name) => {
    setUser((values) => ({ ...values, [name]: value }));
  };

  return (
    <SafeAreaView style={styles.formContainer}>
      <View style={styles.titleWrapper}>
        <Text style={styles.signinTitle}>HaloDoc</Text>
        <Text style={styles.signinSubtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </Text>
      </View>
      <View>
        <TextInput style={styles.formControl} placeholder="Email" />
      </View>
      <View>
        <TextInput
          secureTextEntry={true}
          style={styles.formControl}
          placeholder="Password"
        />
      </View>
      <View>
        <TouchableOpacity style={[styles.btn, styles.btnPrimary]}>
          <View>
            <Text style={[styles.btnLabel, styles.btnLabelLight]}>Sign In</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={[styles.btn, styles.btnSecondary]}>
          <Text style={[styles.btnLabel, { color: "#ff0266" }]}>Register</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: 8,
          gap: 8,
          // backgroundColor: "blue",
        }}
      >
        <View style={{ height: 1, backgroundColor: "gray", flex: 1 }} />
        <Text style={{ color: "gray" }}>OR</Text>
        <View style={{ height: 1, backgroundColor: "gray", flex: 1 }} />
      </View>
      <View>
        <TouchableOpacity
          style={[
            styles.btn,
            styles.btnSecondary,
            { display: "flex", alignItems: "center" },
          ]}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "80%",
            }}
          >
            <Entypo
              style={[
                styles.btnLabelPrimary,
                { flexGrow: 1, textAlign: "center" },
              ]}
              name="facebook"
              size={32}
              color="#fff"
            />
            <Text
              style={[
                styles.btnLabel,
                styles.btnLabelPrimary,
                { flexGrow: 1, textAlign: "left" },
              ]}
            >
              Sign In with Facebook
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: "center",
    gap: 24,
  },
  formControl: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderColor: "#212121",
    borderWidth: 1,
    fontSize: 16,
    width: "100%",
    borderRadius: 8,
  },
  btnIcon: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 30,
    borderRadius: 8,
    elevation: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  btn: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 1,
  },
  btnLabel: {
    textAlign: "center",
    // color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  btnLabelLight: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#f5f5f5",
  },

  btnPrimary: {
    backgroundColor: "#ff0266",

    // borderColor: "#ff0266",
  },

  btnSecondary: {
    borderWidth: 1,
    borderColor: "#ff0266",
  },

  btnLabelPrimary: {
    color: "#ff0266",
  },
  titleWrapper: {
    flex: 0,
    gap: 16,
  },
  signinTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
  },
  signinSubTitle: {
    color: "gray",
  },
});