import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "../colors";
import axios from "axios";
export default function Join({ navigation }) {
  const [pw, setPw] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [isvalidpw, setIsvalidpw] = useState(true);
  const [nickname, setNickname] = useState("");
  // const [dupnickname, setDupnickname] = useState(true);
  const [check, setCheck] = useState("");
  const [state, setState] = useState(true);

  const oneButtonAlert = (title, Msg) =>
    Alert.alert(title, Msg, [{ text: "OK" }]);

  const joinIn = async () => {
    try {
      const response = await axios.post("http://192.168.145.1:3001/adduser", {
        id: id,
        pw: pw,
        name: name,
        nickname: nickname,
      });
      oneButtonAlert("", "회원가입 완료");
      navigation.navigate("loginScreen");
    } catch (error) {
      console.log(error);
    }
  };

  const check_dup_id = () => {
    axios
      .post("http://192.168.145.1:3001/checkdupid", {
        id: id,
      })
      .then((response) => {
        //setDupid(response.data.message);
        console.log(response.data);
      })
      .catch((error) => {
        // setDupid(error.response.data.message);
        oneButtonAlert("", error.response.data.message);
      });
  };

  const check_dup_nickname = () => {
    axios
      .post("http://192.168.145.1:3001/checkdupnickname", {
        nickname: nickname,
      })
      .then((response) => {
        //setDupid(response.data.message);
        console.log(response.data);
      })
      .catch((error) => {
        // setDupid(error.response.data.message);
        oneButtonAlert("", error.response.data.message);
      });
  };

  const checkingPw = (pw) => {
    setPw(pw);
    if (check !== pw && check !== "") setState(false);
    else setState(true);
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (regex.test(pw)) setIsvalidpw(true);
    else setIsvalidpw(false);
  };

  const checkingCheck = (check) => {
    setCheck(check);
    if (check !== pw) {
      setState(false);
    } else {
      setState(true);
    }
  };

  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
  const ref_input5 = useRef();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={{ flex: 1 }}>
        <View style={styles.title}></View>
        <View style={styles.body}>
          <View style={styles.join}>
            <Text style={styles.titleText}>JOIN</Text>
          </View>
          <TextInput
            onChangeText={(id) => setId(id)}
            value={id}
            //autoFocus={true}
            style={styles.joinform}
            placeholder="아이디"
            returnKeyType="next"
            onSubmitEditing={() => {
              if (id != "") check_dup_id();
            }}
          ></TextInput>
          <TextInput
            onChangeText={(pw) => checkingPw(pw)}
            value={pw}
            style={styles.joinform}
            secureTextEntry={true}
            returnKeyType="next"
            placeholder="비밀번호"
            onSubmitEditing={() => {
              // if (pw != "") validation_check();
            }}
            // ref={ref_input2}
          ></TextInput>
          {isvalidpw ? (
            ""
          ) : (
            <Text style={styles.checkPwd}>
              최소 8 자, 하나 이상의 문자와 하나의 숫자 필요
            </Text>
          )}
          <TextInput
            onChangeText={(check) => checkingCheck(check)}
            value={check}
            style={styles.joinform}
            secureTextEntry={true}
            placeholder="비밀번호 확인"
            returnKeyType="next"
            //  ref={ref_input3}
          ></TextInput>
          {state ? (
            ""
          ) : (
            <Text style={styles.checkPwd}>비밀번호가 일치하지 않습니다</Text>
          )}
          <TextInput
            onChangeText={(name) => setName(name)}
            value={name}
            style={styles.joinform}
            placeholder="이름"
            returnKeyType="next"
            // ref={ref_input4}
          ></TextInput>
          <TextInput
            onChangeText={(nickname) => setNickname(nickname)}
            value={nickname}
            //autoFocus={true}
            style={styles.joinform}
            placeholder="닉네임"
            returnKeyType="next"
            onSubmitEditing={() => {
              if (nickname != "") check_dup_nickname();
            }}
          ></TextInput>
          <TouchableOpacity
            style={styles.btn}
            onPress={async () => {
              if (pw === "" || id === "" || name === "" || nickname === "")
                oneButtonAlert("", "항목을 다 입력하세요");
              else await joinIn();
            }}
          >
            <Text style={styles.btnText}>join</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}></View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.skyblue,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 0.7,
    backgroundColor: theme.lightblue,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 20,
    color: "grey",
    marginBottom: 10,
  },
  body: {
    flex: 4,
    backgroundColor: theme.lightblue,
    justifyContent: "center",
  },
  join: {
    alignItems: "center",
    justifyContent: "center",
  },
  joinform: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
    borderColor: "lightgrey",
    backgroundColor: "white",
  },
  putid: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  bottom: { flex: 0.7, backgroundColor: theme.lightblue },
  btnText: { fontWeight: 500, color: "darkgrey" },
  btn: {
    backgroundColor: theme.load,
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
  },
  confirmBtn: {
    padding: 7,
    backgroundColor: theme.load,
    borderRadius: 3,
  },
  confirmText: {
    color: "grey",
  },
  checkPwd: {
    marginLeft: 22,
    color: "red",
    opacity: 0.4,
  },
});
