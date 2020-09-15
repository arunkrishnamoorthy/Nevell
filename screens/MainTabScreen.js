import React, {useState} from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import Carousel from 'react-native-snap-carousel-tabs';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const width = Dimensions.get('window').width;
// const [items, setItems] = useState([
//   {
//     id: '1',
//     text: 'Product 1',
//   },
//   {
//     id: '2',
//     text: 'Product 2',
//   },
//   {
//     id: '3',
//     text: 'Product 3',
//   },
// ]);

// style={{height: viewportHeight}}

const renderTabNavigator = ({item, index}) => {
  return (
    <View style={{flex: 1}}>
      <HomeScreen item={{title: item.text}}></HomeScreen>
      {/* <Tab.Navigator initialRouteName="Home" activeColor="#fff">
        <Tab.Screen
          name="Home"
          component={() => <HomeStackScreen item={item}></HomeStackScreen>}
          options={{
            tabBarLabel: 'Home',
            tabBarColor: '#009387',
            tabBarIcon: ({color}) => (
              <Icon name="ios-home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={DetailsStackScreen}
          options={{
            tabBarLabel: 'Updates',
            tabBarColor: '#1f65ff',
            tabBarIcon: ({color}) => (
              <Icon name="ios-notifications" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarColor: '#694fad',
            tabBarIcon: ({color}) => (
              <Icon name="ios-person" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            tabBarLabel: 'Explore',
            tabBarColor: '#d02860',
            tabBarIcon: ({color}) => (
              <Icon name="ios-aperture" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator> */}
    </View>
  );
};

const MainTabScreen = () => {
  const [items, setItems] = useState([
    {
      id: '1',
      text: 'Product 1',
    },
    {
      id: '2',
      text: 'Product 2',
    },
    {
      id: '3',
      text: 'Product 3',
    },
  ]);

  return (
    <Carousel
      ref={(ref) => ref}
      data={items}
      sliderWidth={width}
      itemWidth={width}
      renderItem={renderTabNavigator}></Carousel>
  );
};

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Overview',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1f65ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <DetailsStack.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#1f65ff"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </DetailsStack.Navigator>
);
