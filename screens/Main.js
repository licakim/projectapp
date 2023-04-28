import { StatusBar } from "expo-status-bar";

//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
//import React, { useEffect, useState } from "react";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";
import { theme } from "../colors";
//import trashScreen from "Trash";
//import infoScreen from "Info";
import { NavigationContainer } from "@react-navigation/native";

export default function Main({ navigation }) {
  const sort = ["유통기한", "카테고리"];
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.search}>
        <TextInput
          style={styles.searchbar}
          placeholder="search"
          returnKeyType="done"
        />
        <TouchableOpacity style={styles.searchIcon}>
          <Fontisto name="search" size={24} color="rgb(192, 221, 247)" />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <SelectDropdown
          buttonStyle={styles.sortBtn}
          buttonTextStyle={{ color: "white", fontSize: 15 }}
          rowTextStyle={{ color: "darkgrey", fontSize: 15 }}
          rowStyle={{
            height: 40,
          }}
          renderDropdownIcon={(isOpened) => {
            return (
              <Fontisto
                name={isOpened ? "angle-up" : "angle-down"}
                size={15}
                color="white"
              />
            );
          }}
          dropdownStyle={{
            borderBottomStartRadius: 7,
            borderBottomEndRadius: 7,
            borderTopStartRadius: 7,
          }}
          data={sort}
          onSelect={(selectedItem, index) => {}}
          defaultButtonText="유통기한"
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
        <View style={{ flex: 7 }}></View>
        <TouchableOpacity
          style={styles.plusBtn}
          onPress={() => navigation.navigate("addScreen")}
        >
          <AntDesign name="pluscircleo" size={40} color={theme.load} />
        </TouchableOpacity>
      </View>
      <View style={styles.Bottombar}>
        <TouchableOpacity onPress={() => navigation.navigate("trashScreen")}>
          <Fontisto name="trash" size={27} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="book" size={27} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("mypageScreen")}>
          <AntDesign name="user" size={27} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.lightblue,
    //alignItems: "center",
    //justifyContent: "center",
  },
  body: {
    flex: 14.5,
    backgroundColor: theme.lightblue,
    borderTopWidth: 2,
    borderTopColor: theme.load,
    // margin: 10,
    marginTop: 20,
    // marginBottom: 30,
    alignItems: "flex-end",
  },
  search: {
    flex: 0.8,
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 70,
  },
  searchbar: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: theme.load,
    borderRadius: 8,
    width: 320,
    // marginLeft: 10,
    // marginRight: 10,
    // marginTop: 80,
    padding: 8,
    //alignItems: "center",
    //justifyContent: "center",
  },
  searchIcon: {
    marginTop: 5,
    marginLeft: 8,
  },
  sortBtn: {
    backgroundColor: theme.load,
    //alignItems: "center",
    //justifyContent: "center",
    borderBottomStartRadius: 7,
    padding: 5,
    height: 30,
    width: 110,
  },
  plusBtn: {
    flex: 1,
    marginRight: 20,
  },
  Bottombar: {
    flex: 1.5,
    backgroundColor: theme.load,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
