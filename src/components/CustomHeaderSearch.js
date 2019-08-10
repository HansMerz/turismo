
import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import {Header, Icon,Button,SearchBar} from 'react-native-elements';


const CustomHeader = ({ navigation }) => (
  <Header
  leftComponent={{
    icon: 'menu',
    color: '#fff',
    onPress: () => navigation.openDrawer(),
  }} 
  centerComponent={
    <SearchBar
    placeholder="Buscar"
    
    containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 7,width:'90%'}}
    placeholderTextColor={'#g5g5g5'}
    inputContainerStyle={{backgroundColor: 'white'}}
            
  />
  }
 
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
export default CustomHeader;