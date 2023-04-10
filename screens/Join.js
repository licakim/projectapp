import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { AntDesign } from "@expo/vector-icons";
//const [focus, setfocus] = useState(false);
//const focusing = () => setfocus(true);
export default function Join({ navigation }) {
  const [pw, setPw] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [check, setCheck] = useState("");

  const checking = () => {
    if (check === pw) {
      //alert("");
      ref_input4.current.focus();
    } else {
      alert("비밀번호가 일치하지 않습니다");
      setCheck("");
      ref_input3.current.focus();
    }
  };
  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
  const ref_input5 = useRef();

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.title}></View>
      <View style={styles.body}>
        <View style={styles.join}>
          <Text style={styles.titleText}>JOIN</Text>
          <AntDesign name="adduser" size={24} color="grey" />
        </View>
        <TextInput
          onChangeText={(id) => setId(id)}
          value={id}
          //autoFocus={true}
          style={styles.joinform}
          placeholder="아이디"
          returnKeyType="next"
          onSubmitEditing={() => ref_input2.current.focus()}
        ></TextInput>
        <TextInput
          onChangeText={(pw) => setPw(pw)}
          value={pw}
          style={styles.joinform}
          secureTextEntry={true}
          returnKeyType="next"
          placeholder="비밀번호"
          onSubmitEditing={() => ref_input3.current.focus()}
          ref={ref_input2}
        ></TextInput>
        <TextInput
          onChangeText={(check) => setCheck(check)}
          value={check}
          style={styles.joinform}
          onSubmitEditing={checking}
          secureTextEntry={true}
          placeholder="비밀번호 확인"
          returnKeyType="next"
          ref={ref_input3}
        ></TextInput>
        <TextInput
          onSubmitEditing={() => ref_input5.current.focus()}
          onChangeText={(name) => setName(name)}
          value={name}
          style={styles.joinform}
          placeholder="이름"
          returnKeyType="next"
          ref={ref_input4}
        ></TextInput>
        <View style={styles.email}>
          <TextInput
            onChangeText={(email) => setEmail(email)}
            value={email}
            style={{ ...styles.joinform, width: 280 }}
            placeholder="이메일"
            returnKeyType="done"
            ref={ref_input5}
          ></TextInput>
          <TouchableOpacity style={styles.confirmBtn}>
            <Text style={styles.confirmText}>인증</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            alert("회원가입 완료");
            navigation.navigate("loginScreen");
          }}
        >
          <Text style={styles.btnText}>join</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beige",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 1,
    backgroundColor: "beige",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    //marginTop: 50,
    fontSize: 20,
    marginLeft: 20,
    marginRight: 5,
    color: "grey",
    marginBottom: 10,
  },
  body: { flex: 4, backgroundColor: "ivory" },
  join: {
    marginTop: 50,
    flexDirection: "row",
  },
  joinform: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    borderWidth: 1,
    //width: 280,
    padding: 10,
    borderRadius: 7,
    borderColor: "lightgrey",
  },
  bottom: { flex: 1, backgroundColor: "beige" },
  btnText: { fontWeight: 500, color: "darkgrey" },
  btn: {
    backgroundColor: "grey",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginLeft: 40,
    marginRight: 40,
  },
  email: {
    flexDirection: "row",
    alignItems: "flex-end",
    // justifyContent: "space-between",
  },
  confirmBtn: {
    padding: 7,
    backgroundColor: "lightgrey",
    borderRadius: 3,
    //borderWidth: 1,
    //borderColor: "darkgrey",
    //marginLeft: 3,
    //alignItems: "center",
    //justifyContent: "center",
    //marginRight: 10,
  },
  confirmText: {
    color: "grey",
  },
});