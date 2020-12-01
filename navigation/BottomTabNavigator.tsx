import { Entypo, EvilIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import AlbumScreen from '../screens/AlbumScreen';
import HomeScreen from '../screens/HomeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
      >

      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="home" size={30} style={{ marginBottom: -3 }} color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Search"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <EvilIcons name="search" size={30} style={{ marginBottom: -3 }} color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Your Library"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="library-music-outline" size={30} style={{ marginBottom: -3 }} color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Music"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="ios-musical-notes" size={30} style={{ marginBottom: -3 }} color={color} />,
        }}
      />

    </BottomTab.Navigator>
  );
}

const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={HomeScreen}
        options={{ 
          headerTitle: 'Home'}}
      />
      <TabOneStack.Screen
        name="AlbumScreen"
        component={AlbumScreen}
        options={{ 
          headerTitle: 'Album',
        }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Not Implemented' }}
      />
    </TabTwoStack.Navigator>
  );
}
