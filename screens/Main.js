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
//import trashScreen from "Trash";
//import infoScreen from "Info";
import { NavigationContainer } from "@react-navigation/native";

export default function Main() {
  const CHEVRON = <Entypo name="chevron-small-down" size={24} color="black" />;
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
          <Fontisto name="search" size={24} color="darkgrey" />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <TouchableOpacity style={styles.sortBtn}>
          <Entypo name="chevron-small-down" size={18} color="grey" />
        </TouchableOpacity>
        <ScrollView></ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beige",
    //alignItems: "center",
    //justifyContent: "center",
  },
  body: {
    flex: 17,
    backgroundColor: "beige",
    borderTopWidth: 3,
    borderTopColor: "darkgrey",
    // margin: 10,
    marginTop: 20,
    // marginBottom: 30,
    alignItems: "flex-end",
  },
  search: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 70,
  },
  searchbar: {
    backgroundColor: "ivory",
    borderWidth: 3,
    borderColor: "darkgrey",
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
    marginTop: 8,
    marginLeft: 8,
  },
  sortBtn: {
    backgroundColor: "darkgrey",
    alignItems: "center",
    justifyContent: "center",
    borderBottomStartRadius: 20,
    padding: 5,
    width: 50,
  },
});
