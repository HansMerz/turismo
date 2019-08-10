/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import Admin from './view/Admin';
import MainAppStack from './view/MainAppStack';
import MainAppSwitchAdmin from './view/MainAppSwitchAdmin';

import React, {} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import {Icon} from 'react-native-elements';
import { createDrawerNavigator, createAppContainer,DrawerItems } from 'react-navigation';


const CustomDrawercomponent =props=>(
  <SafeAreaView style={{flex: 1}}>
    <ScrollView>
      <DrawerItems{...props}/>

    </ScrollView>

  </SafeAreaView>
);

const DrawerNavigator = createDrawerNavigator({
  Home1: {
    screen: MainAppStack,
    navigationOptions:{
      drawerLabel: 'Inicio',
      drawerIcon:({tintColor})=>(
        <Icon name='home' style={{fontSize:24,color:tintColor}}/>
      ),
      
    }
  },
  Admin:{
    screen: MainAppSwitchAdmin,
    navigationOptions:{
      drawerLabel: 'Sign in',
      drawerIcon:({tintColor})=>(
        <Icon name='person' style={{fontSize:24,color:tintColor}}/>
      ),
      
    }
  }, 
  
},{
  initialRouteName: 'Home1',
  contentComponent:CustomDrawercomponent,
  contentOptions:{
    activeTintColor:'orange'
  }


});


export default MainAppDrawer = createAppContainer(DrawerNavigator);

