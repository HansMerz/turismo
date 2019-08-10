import React, { Component } from "react";
import {StyleSheet, View, Text, TextInput, Picker, ScrollView, Image, Button, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-navigation";
import CustomHeader from '../../components/CustomHeader';
var ImagePicker = require('react-native-image-picker');


export default class CrudAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      desc:'',
      category:null,
      address: '',
      city:'',
      telephone: null,
      filePath: {},
    };    
    //this.consultar=this.consultar.bind(this)
  }

  saveChanges = () => {    
    const URL = "http://servicesproject.000webhostapp.com/api/place";
    var formData = new FormData();

    formData.append('name', this.state.name);
    formData.append('description', this.state.desc);
    formData.append('category_id', this.state.category);
    formData.append('address', this.state.address);
    formData.append('city', this.state.city);
    formData.append('telephone', this.state.telephone);
    formData.append('score', 5);
    formData.append('url', 'Test url');    
    console.log(formData);    
    const settings = {
      method: 'POST' ,
      headers: {        
        'Content-Type': 'application/json'
      },     
      body : formData
    };
    fetch(URL, {
      method: 'POST',
      body : formData
    })
    .then((res) => res.json())  // promise
    .then((json) => {console.log(json)})    
  }

  chooseFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);
 
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          filePath: source,
        });
      }
    });
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1}}> 
        <CustomHeader navigation={this.props.navigation} />       
        <ScrollView>
          <View style={{ padding:10}}>
            <View>
              <Text>Nombre</Text>
              <TextInput
                style={styles.input}
                placeholder="Ingresa el nombre"
                onChangeText={(name) => this.setState({name})}
              />
            </View>
            <View style={styles.textAreaContainer} >
              <Text>Descripción</Text>
              <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Ingresa la descripción"
                placeholderTextColor="grey"
                numberOfLines={10}
                multiline={true}
                onChangeText={(desc) => this.setState({desc})}
              />
            </View>
            <View>
              <Text>Categoría</Text>
              <View style={{height:45,borderRadius: 10, borderWidth: 1, borderColor: '#bdc3c7', overflow: 'hidden', margin: 5}}>
                <Picker                    
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({category : itemValue})
                  }>
                  <Picker.Item label="Sitio turístico" value="1" />
                  <Picker.Item label="Hotel" value="2" />
                  <Picker.Item label="Restaurante" value="3" />
                  <Picker.Item label="Evento" value="4" />
                </Picker>
              </View>              
            </View>
            <View>
              <Text>Dirección</Text>
              <TextInput
                style={styles.input}
                placeholder="Ingresa la dirección"
                onChangeText={(address) => this.setState({address})}
              />
            </View>
            <View>
              <Text>Ciudad</Text>
              <TextInput
                style={styles.input}
                placeholder="Ingresa la ciudad"
                onChangeText={(city) => this.setState({city})}
              />
            </View>
            <View>
              <Text>Telefono</Text>
              <TextInput
                style={styles.input}
                keyboardType={'phone-pad'}
                placeholder="Ingrese el teléfono"
                onChangeText={(telephone) => this.setState({telephone})}
              />
            </View>
            <View>
              <Text>Elige las imágenes</Text>
              {/*<Image 
          source={{ uri: this.state.filePath.path}} 
          style={{width: 100, height: 100}} />*/}
              <Image
                source={{
                  uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
                }}
                style={{ width: 100, height: 100 }}
              />
              <Image
                source={{ uri: this.state.filePath.uri }}
                style={{ width: 250, height: 250 }}
              />
              <Text style={{ alignItems: 'center' }}>
                {this.state.filePath.uri}
              </Text>
              <Button title="Choose File" onPress={this.chooseFile.bind(this)} />
            </View>
          </View>                    
        </ScrollView>
        <TouchableOpacity style={styles.bottomView} onPress={(e) => this.saveChanges()}>
            <Text style={styles.textStyle}>Guardar cambios</Text>
        </TouchableOpacity>                                
      </SafeAreaView>
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
  input:{
      height:45,
      margin:5,      
      flex:1,
      borderColor: '#bdc3c7',
      borderWidth: 1,
      borderRadius: 10
  },
  textAreaContainer: {    
    borderWidth: 0,
    padding: 0
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
    borderWidth:1,
    margin:5,
    borderColor: '#bdc3c7',
    borderRadius: 10
  },  
  bottomView: {
    width: '100%',
    height: 50,
    backgroundColor: '#078714',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  }, 
  textStyle: {
    color: '#fff',
    fontSize: 18,
  },
});