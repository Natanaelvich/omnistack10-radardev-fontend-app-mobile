import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

export default createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          title: 'DevRadar',
        },
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          title: 'Perfil do Github',
        },
      },
    },
    {
      defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: '#7d40e7',
        },
        headerTitleAlign: 'center',
      },
    }
  )
);
