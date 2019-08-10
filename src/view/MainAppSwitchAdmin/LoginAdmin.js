import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ToastAndroid
} from 'react-native';


import CustomHeader from '../../components/CustomHeader';

export default class LoginAdmin extends Component {

  constructor(props) {
    super(props);
   this.state = {
      user   : '',
      password: '',
      validate : true,
    }
  }

  onClickListener = () => {
    
    if(this.state.user == '' || this.state.password == '')
    {
      this.setState({validate : false})
    }
    else
    {
      this.login();      
    }
  }

  login(){    
    try{
      const URL = 'http://servicesproject.000webhostapp.com/api/getLog';
      var formData = new FormData();

      formData.append('user', this.state.user);
      formData.append('pass', this.state.password);

      fetch(URL,{
        method: 'POST',
        body: formData
      })
      .then((res) => res.json())
      .then((json) => {      
        this.setState({validate : true})        
        if(json.status)
        {     
          ToastAndroid.showWithGravityAndOffset(
            'Las credenciales si coinciden',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            20,
            50,
          ); 
          this.props.navigation.navigate('Crud');
        }
        else
        {
          ToastAndroid.showWithGravityAndOffset(
            'Las credenciales no coinciden',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            20,
            50,
          ); 
        }      
      });            
    }catch(variable){
      alert (variable);
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Usuario"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(user) => this.setState({user})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('../../icon/key.png')}/>
          <TextInput style={styles.inputs}
              placeholder="Contraseña"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={(e) => this.onClickListener()}>
          <Text style={styles.loginText}>Ingresar</Text>
        </TouchableHighlight>
        { 
          this.state.validate 
          ?
            <Text></Text>                        
          :
          <View style={[styles.inputContainer, styles.errorMessage]}>
            <Image style={styles.inputIcon} source={require('../../icon/error.png')}/>
            <Text style={styles.textMessage}>Usuario o contraseña vacía</Text>
          </View>        
        }        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  },
  errorMessage:{
    backgroundColor: '#DB0707',
    justifyContent: 'space-around'
  },
  textMessage:{
    color: "#F6F6F6"
  }
});