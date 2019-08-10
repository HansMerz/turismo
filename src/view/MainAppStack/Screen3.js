import React, { Component } from "react";

import {Platform, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, ActivityIndicator} from 'react-native';  
 import { Icon, Rating } from 'react-native-elements';

import CustomHeader from '../../components/CustomHeader';


export default class Screen3 extends Component {
  constructor(props) {
    super(props);
    this.state={itemid:null,
                places : [],
                placeDetail : [],
                isDesc:true,
                isLoad:null,
                init:true,
                detail : false};
    
  }      
  componentDidMount()
  {    
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const URL = 'http://servicesproject.000webhostapp.com/api/place/'+itemId;                       
    this.setState({init : true});       
    fetch(URL)
    .then((res) => res.json())
    .then((json) => {           
      if(json.status)
      {               
        this.setState({placeDetail : json.data.place},(e) => {
          this.setState({init : false});
          this.setState({detail : true});
          console.log(this.state.placeDetail) 
        })
      }      
    });      
  }
  placeDetail() {    
    const URL = 'http://servicesproject.000webhostapp.com/api/place/'+this.state.itemid;                       
    this.setState({init : true});       
    fetch(URL)
    .then((res) => res.json())
    .then((json) => {           
      if(json.status)
      {               
        this.setState({placeDetail : json.data.place},(e) => {
          this.setState({init : false});
          this.setState({detail : true});
          console.log(this.state.placeDetail) 
        })
      }      
    });
  }
  changeDescription(item, val) {
    if(val == 1)
    {
      this.setState({isDesc : true});
    }
    else if(val == 2)
    {
      this.setState({isDesc : false});
    }    
  }

  render() {

    //<Text>{this.state.itemid}</Text> 
    //<CustomHeader navigation={this.props.navigation} />
      
    return (
      <View style={{flex:1}}>
        {           
          this.state.placeDetail.map((item, index) => (    
            <View style={{flex:1}} key={item.id}>
              <View style={styles.contentImageDetail}>
                <Image/>
              </View>
              <View style={styles.titleHeader}>
                <View style={{width:'70%', height:'100%',padding:20, justifyContent:'center'}}>
                  <Text style={{color: "#404040", fontSize:20}}>{item.name}</Text>
                </View>
                <View style={{width:'15%', height:'100%', justifyContent:'center'}}>
                  <Icon                      
                      name='heart'
                      type='font-awesome'
                      color='#D20B1F'
                    />
                </View>
                <View style={{width:'15%', height:'100%', justifyContent:'center'}}>
                    <Icon                      
                      name='map-marker'
                      type='font-awesome'
                      color='#517fa4'
                    />
                </View>
              </View>
              <View style={styles.score}>
                <Rating
                  showRating 
                  fractions={1}
                  readonly
                  imageSize={30}                                       
                  startingValue={Number.parseInt(item.score)}                  
                />
              </View>
              <View style={styles.descriptionDetail}>
                <TouchableOpacity style={[styles.buttonsDetail,{ backgroundColor:'#7D7D7D'}]}
                    onPress={(e) => {this.changeDescription(item, 1)}}>
                    <Icon                      
                      name='eye'
                      type='font-awesome'
                      color='#F9F9F9'
                    />
                  <Text style={{color:'#F9F9F9'}}>Descripción</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={[styles.buttonsDetail, {backgroundColor:'#311FA6'}]}
                    onPress={(e) => {this.changeDescription(item, 2)}}>
                    <Icon                      
                      name='info-circle'
                      type='font-awesome'
                      color='#F9F9F9'
                    />
                  <Text style={{color:"#F9F9F9"}}>Información</Text>
                </TouchableOpacity>                
              </View>
              <View style={{width:'100%', height:'31%',  margin:5}}>
                {this.state.isDesc ? 
                  <View style={{width:'96%',  padding:10, height:'100%', backgroundColor:'#E4E4E4', borderRadius:5}}>
                    <Text style={{fontSize:15, textAlign:'center', fontWeight:'bold'}}>{item.description}</Text>
                  </View> 
                  : 
                  <View style={{width:'96%', height:'100%', padding:10, backgroundColor:'#C7D1F2', borderRadius:5, flexDirection:'column'}}>
                    <View style={{flexDirection:'row', width:'100%', height:'50%'}}>
                      <View style={styles.viewInfo}>
                        <Icon                      
                          name='building'
                          type='font-awesome'
                          color='#575757'
                        />
                        <Text style={{color:"#000000", fontWeight:'bold'}}>{item.city}</Text>
                      </View>
                      <View style={styles.viewInfo}>
                        <Icon                      
                          name='map-marker'
                          type='font-awesome'
                          color='#575757'
                        />
                        <Text style={{color:"#000000", fontWeight:'bold'}}>{item.address}</Text>
                      </View>
                    </View>
                    <View style={{flexDirection:'row', width:'100%', height:'50%'}}>
                      <View style={styles.viewInfo}>
                        <Icon                      
                          name='phone'
                          type='font-awesome'
                          color='#575757'
                        />
                        <Text style={{color:"#000000", fontWeight:'bold'}}>{item.telephone}</Text>
                      </View>
                    </View>
                  </View> 
                }                
              </View>              
            </View>
              ))                            
            }  
      </View>
    );
  }
  
}
const styles = StyleSheet.create({
    contentList:{
        width:'100%',
        height: '25%',
        marginTop:10
      },
      contentImageDetail:{
        width:'100%',
        height: '40%',
      },
      titleHeader:{
        width:'100%',
        height:'10%',
        backgroundColor:'#DEDEDE',
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row',    
      },
      score:{
        width:'100%',
        height:'13%',
        marginTop:10
      },
      descriptionDetail:{
        width:'100%',
        height:'5%',
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-around'
      },
      buttonsDetail:{
        width:'45%', 
        borderRadius:10, 
        height:'100%', 
        alignItems:'center', 
        justifyContent:'space-around', 
        flexDirection:'row'
      },
      viewInfo:{
        width:'50%', 
        height:'30%',
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-around'
      }
  });
  