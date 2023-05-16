import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
  Button,
  Alert,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import React, { useEffect, useState, useRef } from "react";
import SelectDropdown from "react-native-select-dropdown";
import { Fontisto } from "@expo/vector-icons";
import { theme } from "../colors";
export default function Add({ navigation }) {
  const [name, setName] = useState("");
  const [cnt, setCnt] = useState(0);
  const category = ["a", "b", "c", "d"];
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState("날짜를 선택하세요");
  const [modalvisible, setModalVisible] = useState(false);
  //import axios from "axios";

  // const sendfoodinform =()=>{
  //   axios.post('url',{
  //     foodname: name,
  //     category: category,
  //     expiration-date: selectedDate,
  //   })
  //   .then(function(response){
  //     twoButtonAlert("", "식품 등록을 완료하시겠습니까?");
  //     navigation.navigate("loginScreen");
  //   })
  //   .catch(function(error){
  //     console.log(error);
  //   });
  // }

  // const addfood = () => {
  //   setModalVisible(true);
  // };

  const initState = () => {
    setModalVisible(false);
    setName("");
    setCnt(0);
    setSelectedDate("날짜를 선택하세요");
  };

  const twoButtonAlert = (title, Msg) =>
    Alert.alert(title, Msg, [
      {
        text: "추가 등록",
        onPress: () => initState(),
        style: "cancel",
      },
      { text: "완료", onPress: () => navigation.navigate("mainScreen") },
    ]);

  // const infocheckAlert = () =>
  //   Alert.alert("", `이름:${name}\n카테고리:${selectedCategory}\n`, [
  //     {
  //       text: "네",
  //       onPress: () => twoButtonAlert("", "식품 등록을 완료하시겠습니끼?"),
  //       style: "cancel",
  //     },
  //     { text: "아니오", onPress: () => navigation.navigate("addScreen") },
  //   ]);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    setSelectedDate(formattedDate);
    hideDatePicker();
  };
  const increase = () => {
    setCnt(cnt + 1);
  };
  const decrease = () => {
    if (cnt > 0) setCnt(cnt - 1);
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.title}></View>
      <View style={styles.body}>
        <View style={styles.add}>
          <Text style={styles.titleText}>식품등록</Text>
        </View>
        <View style={styles.addview}>
          <Text style={styles.addtext}>이름</Text>
          <TextInput
            //autoFocus={true}
            style={{ ...styles.addform, marginLeft: 46 }}
            value={name}
            onChangeText={(name) => setName(name)}
            placeholder=""
            returnKeyType="next"
          ></TextInput>
        </View>
        <View style={styles.addview}>
          <Text style={styles.addtext}>수량</Text>
          <TextInput
            //autoFocus={true}
            style={{ ...styles.addform, width: 50, marginLeft: 46 }}
            returnKeyType="next"
            //keyboardType="decimal-pad"
            placeholder={`${cnt}`}
          ></TextInput>
          <View style={{ marginTop: 20 }}>
            <TouchableOpacity onPress={increase}>
              <Fontisto name="angle-up" size={15} color="grey" />
            </TouchableOpacity>
            <TouchableOpacity onPress={decrease}>
              <Fontisto name="angle-down" size={15} color="grey" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.addview}>
          <Text style={styles.addtext}>카테고리</Text>
          <SelectDropdown
            buttonStyle={{
              borderRadius: 7,
              borderWidth: 1,
              borderColor: "lightgrey",
              backgroundColor: "white",
              marginLeft: 20,
              marginRight: 20,
              marginTop: 20,
              height: 40,
            }}
            buttonTextStyle={{ color: "darkgrey", fontSize: 15 }}
            rowTextStyle={{ color: "darkgrey", fontSize: 15 }}
            renderDropdownIcon={(isOpened) => {
              return (
                <Fontisto
                  name={isOpened ? "angle-up" : "angle-down"}
                  size={15}
                  color="grey"
                />
              );
            }}
            dropdownStyle={{
              borderRadius: 7,
            }}
            data={category}
            onSelect={(selectedItem, index) => {}}
            defaultButtonText="가공식품"
            buttonTextAfterSelection={(selectedItem, index) => {
              setSelectedCategory(selectedItem);
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>
        <View style={styles.addview}>
          <Text style={styles.addtext}>유통기한</Text>
          <TouchableOpacity
            style={styles.selectDateBtn}
            onPress={showDatePicker}
          >
            <Text
              style={{ color: "darkgrey", fontSize: 15 }}
            >{`${selectedDate}`}</Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
        <TouchableOpacity
          style={styles.btn}
          //onPress={() => twoButtonAlert("", "식품 등록을 완료하시겠습니까?")}
          onPress={() => setModalVisible(true)}
        >
          <Modal
            visible={modalvisible}
            animationType="slide"
            style={{ margin: 0, justifyContent: "flex-end" }}
            // transparent="true"
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>모달창 내용</Text>
              <Button
                title="OK"
                onPress={() =>
                  twoButtonAlert("", "식품 등록을 완료하시겠습니까?")
                }
              />
            </View>
          </Modal>
          <Text style={styles.btnText}>등록</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}></View>
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
  title: {
    flex: 1,
    backgroundColor: theme.lightblue,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    //marginTop: 50,
    fontSize: 20,
    //marginLeft: 20,
    // marginRight: 5,
    color: "grey",
    marginBottom: 10,
  },
  body: { flex: 4, backgroundColor: theme.lightblue, justifyContent: "center" },
  add: {
    //marginTop: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    //padidngBottom: 20,
  },
  addview: {
    flexDirection: "row",
    alignItems: "center",
    padding: 2,
  },
  addtext: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 15,
    color: "grey",
  },
  addform: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    borderWidth: 1,
    //width: 280,
    padding: 13,
    height: 40,
    borderRadius: 7,
    borderColor: "lightgrey",
    backgroundColor: "white",
    width: 250,
  },
  bottom: { flex: 1, backgroundColor: theme.lightblue },
  btnText: { fontWeight: 500, color: "darkgrey" },
  btn: {
    backgroundColor: theme.load,
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginLeft: 40,
    marginRight: 40,
  },
  confirmBtn: {
    padding: 7,
    backgroundColor: "lightgrey",
    borderRadius: 3,
  },
  confirmText: {
    color: "grey",
  },
  selectDateBtn: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    borderWidth: 1,
    //width: 280,
    padding: 10,
    height: 40,
    borderRadius: 7,
    borderColor: "lightgrey",
    backgroundColor: "white",
  },
  dateSelect: {},
});
