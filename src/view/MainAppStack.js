import { createStackNavigator } from "react-navigation";
import HomeScreen from './MainAppStack/HomeScreen';
import Screen2 from './MainAppStack/Screen2';
import Screen3 from './MainAppStack/Screen3';
const MyStackNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      },
    },
    Screen2:{
      screen: Screen2,
      navigationOptions: {
        header: null
      },
    }, 
    Screen3:{
      screen: Screen3,
      navigationOptions: {
        header: null
      },
    }, 
  },{
    initialRouteName: 'Home',
  }
  );
  export default MyStackNavigator;  