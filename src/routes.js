import React from 'react';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import HeaderInfo from './components/HeaderInfo';
import Search from './components/Search';

import Main from './pages/Main';
import Profile from './pages/Profile';
import Orders from './pages/Orders';

const StackNav = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: <HeaderInfo navigation={navigation} />,
        headerStyle: {
          backgroundColor: '#000',
        },
      };
    },
  }
})

const BottomTab = createAppContainer(
  createMaterialBottomTabNavigator({
    Main: {
      screen: Main,
      navigationOptions: ({navigation}) => {
          return {
            headerShown: true,
            tabBarVisible: true,
            tabBarLabel: 'Inicio',
            tabBarIcon: ({tintColor}) => (
              <Icon name="home" size={22} color={tintColor} />
          ),
        };
      },
    },
    Search: {
      screen: Search,
      navigationOptions: ({navigation}) => {
        return {
          headerShown: false,
          tabBarVisible: true,
          tabBarLabel: 'Busca',
          tabBarIcon: ({tintColor}) => (
            <Icon name="search" size={22} color={tintColor} />
          ),
        };
      },
    },
    Orders: {
      screen: Orders,
      navigationOptions: ({navigation}) => {
        return {
          headerShown: false,
          tabBarVisible: true,
          tabBarLabel: 'Pedidos',
          tabBarIcon: ({tintColor}) => (
            <Icon name="file-text-o" size={22} color={tintColor} />
          ),
        };
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: ({navigation}) => {
          return {
            headerShown: false,
            tabBarVisible: true,
            tabBarLabel: 'Perfil',
            tabBarIcon: ({tintColor}) => (
              <Icon name="user" size={22} color={tintColor} />
          ),
        };
      },
    },
    }, {
      initialRouteName: 'Main',
      activeColor: '#000',
      inactiveColor: '#181818',
      barStyle: {
        backgroundColor: '#FFF',
        borderTopColor: '#FFF',
      },
    })
  )

export default BottomTab;