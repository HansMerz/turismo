/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  
  Image
} from 'react-native';
import ImageOverlay from "react-native-image-overlay";

import {
  
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createStackNavigator } from 'react-navigation';

import CustomHeader from '../../components/CustomHeader';




export default class HomeScreen extends Component {
 
  constructor(props) {
    super(props);
   
  }
   render() {
    return (
      <View style={styles.container}>
        <CustomHeader navigation={this.props.navigation} />
        <View style={styles.contentMap}>
          
        </View>       
        <View style={styles.contentCat}>
          <TouchableOpacity style={styles.grid} onPress={() => this.props.navigation.navigate('Screen2',{categoriaId:1})}>
            <ImageOverlay
              source={require('../../icon/sitio.jpg')}
              title="Sitios"
              contentPosition="center"
              titleStyle={{ color: '#EFEFEF', fontWeight: 'bold' }} 
              containerStyle={{width: '100%', height:'100%'}}/>
            
          </TouchableOpacity>
          <TouchableOpacity style={styles.grid} onPress={() => this.props.navigation.navigate('Screen2',{categoriaId:2})}>
            
          <ImageOverlay
              source={require('../../icon/hotel.jpg')}
              title="Hoteles"
              contentPosition="center"
              titleStyle={{ color: '#EFEFEF', fontWeight: 'bold' }} 
              containerStyle={{width: '100%', height:'100%'}} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.grid} onPress={() => this.props.navigation.navigate('Screen2',{categoriaId:3})}>
            
            <ImageOverlay
              source={require('../../icon/restaurante.jpg')}
              title="Restaurantes"
              contentPosition="center" 
              titleStyle={{ color: '#EFEFEF', fontWeight: 'bold' }} 
              containerStyle={{width: '100%', height:'100%'}}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.grid} onPress={() => this.props.navigation.navigate('Screen2',{categoriaId:4})}>
            
            <ImageOverlay
              source={require('../../icon/evento.jpg')}
              title="Actividades"
              contentPosition="center"
              titleStyle={{ color: '#EFEFEF', fontWeight: 'bold' }} 
              containerStyle={{width: '100%', height:'100%'}} />
          </TouchableOpacity>
        </View> 
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  }, 
  container: {
    flex: 1,
    
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  contentMap: {
    flex:1    
  },
  contentCat: {
    flex: 1,
    flexDirection: 'row', 
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    padding: '1%'
  },
  grid:{ 
    width: '45%',
    height: '45%',
    margin : '2%'    
  }
});


