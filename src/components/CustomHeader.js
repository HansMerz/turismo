
import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import {Header, Icon,Button,SearchBar} from 'react-native-elements';


const CustomHeaderSearch = ({ navigation }) => (
  <Header
  leftComponent={{
    icon: 'menu',
    color: '#fff',
    onPress: () => navigation.openDrawer(),
  }} 
 
 
  backgroundColor="blue"
/> 
    

);
//
const styles = StyleSheet.create({
    container: {
      borderBottomWidth: 2,
      height: 70,
      paddingTop: 20
    }
  });
export default CustomHeaderSearch;