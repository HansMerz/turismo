/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

//import HomeScreen from './screens/HomeScreen';
//import Screen1 from './screens/Screen1';
//import Screen2 from './screens/Screen2';
import MainAppDrawer from './src/MainAppDrawer';
import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Dimensions
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Icon} from 'react-native-elements';
import { createDrawerNavigator, createAppContainer,DrawerItems, createStackNavigator } from 'react-navigation';


export default class App extends Component {
  render() {
    return <MainAppDrawer />;
  }
}

