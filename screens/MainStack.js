import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import List from './List';
import ProductDetail from './ProductDetail';
import MainTabScreen from './MainTabScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const ProductStack = createStackNavigator();

const MainStack = ({navigation}) => {
  return (
    <ProductStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1A5276',
        },
        headerTitleStyle: {
          // fontWeight: 'bold',
        },
        headerTintColor: '#fff',
      }}>
      <ProductStack.Screen
        name="Products"
        component={List}
        options={{
          title: 'Products',
          headerLeft: () => (
            <Icon
              name="menu"
              size={25}
              color="#fff"
              style={{
                padding: 4,
                margin: 3,
              }}
              backgroundColor="#fff"
              onPress={() => {
                navigation.openDrawer();
              }}></Icon>
          ),
        }}
      />
      <ProductStack.Screen
        name="Product Details"
        component={MainTabScreen}
        options={{
          title: 'Product Detail',
          headerLeft: () => (
            <Icon
              name="menu"
              size={25}
              color="#fff"
              style={{
                padding: 4,
                margin: 3,
              }}
              backgroundColor="#fff"
              onPress={() => {
                navigation.openDrawer();
              }}></Icon>
          ),
        }}
      />
    </ProductStack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
