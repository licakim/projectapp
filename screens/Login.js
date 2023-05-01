import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { theme } from "../colors";
//import axios from "axios";
export default function Login({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const oneButtonAlert = (title, Msg) =>
    Alert.alert(title, Msg, [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  // const logIn = ()=>{
  //   axios.post('link',{
  //     userId: id,
  //     password: pw,
  //   })
  //   .then(response => {
  //     const obj = JSON.parse(response.data);
  //     if(response.data.success){
  //       navigation.navigate("mainScreen");
  //     }else{
  //       oneButtonAlert("","아이디 또는 비밀번호가 잘못됐습니다");
  //     }
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   })
  // }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={require("../logo.png")}
        style={{ width: 120, height: 120, resizeMode: "cover" }}
      />
      <View>
        <TextInput
          onChangeText={(id) => setId(id)}
          value={id}
          returnKeyType="done"
          placeholder="ID"
          style={{ ...styles.input, marginTop: 25 }}
        />
        <TextInput
          onChangeText={(pw) => setPw(pw)}
          secureTextEntry={true}
          value={pw}
          returnKeyType="done"
          placeholder="PW"
          style={styles.input}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          if (id !== "" && pw !== "") navigation.navigate("mainScreen");
          //if (id !== "" && pw !== "") Login();
          else if (id === "") oneButtonAlert("", "아이디를 입력하세요");
          else if (pw === "") oneButtonAlert("", "비밀번호를 입력하세요");
        }}
      >
        <Text style={{ ...styles.btnText, color: "#5C5C60", marginTop: 5 }}>
          login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("joinScreen")}>
        <Text style={{ ...styles.btnText, color: "grey" }}>create account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.load,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {},
  input: {
    backgroundColor: "white",
    borderColor: "lightgrey",
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 15,
    marginVertical: 10,
    fontSize: 18,
  },
  btnText: {
    fontSize: 18,
    marginTop: 2,
  },
});
