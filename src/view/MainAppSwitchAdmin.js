import { createSwitchNavigator } from "react-navigation";
import LoginAdmin from './MainAppSwitchAdmin/LoginAdmin';
import CrudAdmin from './MainAppSwitchAdmin/CrudAdmin';

const MySwitchkNavigator = createSwitchNavigator({
    Login: {
      screen: LoginAdmin,
      navigationOptions: {
        header: null
      },
    },
    Crud: {
      screen: CrudAdmin,
      navigationOptions: {
        header: null
      },
    },
    
  },{
    initialRouteName: 'Login',
  }
  );
  export default MySwitchkNavigator;  