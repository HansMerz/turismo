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
  ActivityIndicator,
  Image, 
  Dimensions
  
} from 'react-native';

import {
  
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import {Header, Icon,Button,SearchBar,Rating } from 'react-native-elements';
import CustomHeaderSearch from '../../components/CustomHeaderSearch';


const { height} = Dimensions.get('window');
export default class Screen2 extends Component {
  constructor(props) {
    super(props);
    this.state={id:null,init:null,places:[],isLoad:null, screenHeight: 0,};
    
   
    
  }
  

  componentDidMount(){
    const { navigation } = this.props;
    const categoriaId = navigation.getParam('categoriaId', 'NO-ID');
    const URL = 'http://servicesproject.000webhostapp.com/api/getPlaces/'+categoriaId;                       
    this.setState({init : true});       
    fetch(URL)
    .then((res) => res.json())
    .then((json) => {      
      if(json.status)
      {        
        this.setState({places : json.data.places}, (e) => {
          this.setState({isLoad : false})
        }) 
      }      
    }); 
  }

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };
 
  render() {
    const scrollEnabled = this.state.screenHeight > height;
    return (
      <SafeAreaView style={{flex:1}}>
        <CustomHeaderSearch navigation={this.props.navigation} />
        <ScrollView>
           {
              this.state.places.map((item, index) => (
                
                <TouchableOpacity style={styles.list} key={item.id} onPress={() => this.props.navigation.navigate('Screen3',{itemId:item.id})}>
                  <View style={{backgroundColor: 'black', width: '40%', height: '100%'}}>
                    <Image style={{height:'100%'}} />
                  </View>
                  <View style={{width: '60%', height: '100%', padding:10}}>
                    <View style={{width:'100%', height:'20%'}}>
                      <Text style={{textAlign:'center', fontSize:16, fontWeight:'500'}}>{item.name}</Text>
                    </View>
                    <View style={{width:'100%', height:'60%'}}>
                      <Text style={{textAlign:'center', fontSize:13, fontWeight:'200'}}>{item.description}</Text>  
                    </View>                                       
                    <View style={{width:'100%', height:'20%', fontSize:12, justifyContent:'space-between', alignItems:'center',  flexDirection:'row'}}>
                      <Icon                      
                        name='map-marker'
                        type='font-awesome'
                        color='#251D55'                          
                      />
                      <Text style={{textAlign:'center', fontSize:12, fontWeight:'500'}}>                        
                        {item.address}
                      </Text>
                    </View>
                  </View>                    
                </TouchableOpacity>                  
                                                        
              ))                            
            }                           
        </ScrollView>
          

        
         
           
      </SafeAreaView>
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
  list:{    
    //backgroundColor:'#F5F5F5',
    width:'100%',       
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',    
    marginTop:10,
    flex:1
  },
  scrollview: {
    flexGrow: 1,
  },
  
});


