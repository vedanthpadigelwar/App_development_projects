import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import MenuScreen from './MenuScreen';
import CardsScreen from './CardsScreen';
import NotificationScreen from './NotificationScreen';

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const CardsStack = createStackNavigator();
const MenuStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#3BBB23',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarColor: '#3BBB23',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Cards"
        component={CardsStackScreen}
        options={{
          tabBarLabel: 'Cards',
          tabBarColor: '#3BBB23',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-albums" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuStackScreen}
        options={{
          tabBarLabel: 'Menu',
          tabBarColor: '#3BBB23',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-menu" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) =>(
  <HomeStack.Navigator  screenOptions={{
    headerStyle: {
      backgroundColor: '#3BBB23',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      
    },
  }}>
  <HomeStack.Screen name="Home" component={HomeScreen} options={{
    title:"Villageagro",
    headerLeft: () => (
      <Icon.Button name="ios-menu" size={25} backgroundColor="#3BBB23" onPress={() => navigation.openDrawer()}></Icon.Button>
    ),
    headerRight: () => (
      <Icon.Button name="ios-notifications" size={25} backgroundColor="#3BBB23"  onPress={() => alert("coming soon!!")}></Icon.Button>
    )
  }}/>

  </HomeStack.Navigator>
  );

  const SearchStackScreen = ({navigation}) =>(
    <SearchStack.Navigator  screenOptions={{
      headerStyle: {
        backgroundColor: '#3BBB23',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        //alignSelf: 'center' 
      },
    }}>
      <SearchStack.Screen name="Search" component={SearchScreen} options={{title:"Villageagro",
    headerLeft: () => (
      <Icon.Button name="ios-menu" size={25} backgroundColor="#3BBB23" onPress={() => navigation.openDrawer()}></Icon.Button>
    )
    }}/>
    </SearchStack.Navigator>
    );

  const CardsStackScreen = ({navigation}) =>(
    <CardsStack.Navigator  screenOptions={{
      headerStyle: {
        backgroundColor: '#3BBB23',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        //alignSelf: 'center' 
      },
    }}>
      <CardsStack.Screen name="Cards" component={CardsScreen} options={{title:"Villageagro",
    headerLeft: () => (
      <Icon.Button name="ios-menu" size={25} backgroundColor="#3BBB23" onPress={() => navigation.openDrawer()}></Icon.Button>
    )
    }}/>
    </CardsStack.Navigator>
    );

  const MenuStackScreen = ({navigation}) =>(
    <MenuStack.Navigator  screenOptions={{
      headerStyle: {
        backgroundColor: '#3BBB23',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        //alignSelf: 'center' 
      },
    }}>
      <MenuStack.Screen name="Menu" component={MenuScreen} options={{title:"Villageagro",
    headerLeft: () => (
      <Icon.Button name="ios-menu" size={25} backgroundColor="#3BBB23" onPress={() => navigation.openDrawer()}></Icon.Button>
    )
    }}/>
    </MenuStack.Navigator>
    );

