import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Animated, StyleSheet, Text, TouchableOpacity, View, StatusBar, SafeAreaView, ScrollView, useColorScheme, Dimensions, Image, MultiBarButton, MaterialIcons, headerShown, cardShadowEnabled } from 'react-native'
import NotificationDosentWork from '../screens/NotificationDosentWork'
import Notifications from '../screens/notifications'
import SoundsPage from '../screens/soundsPage'
import RecordingPage from '../screens/newSoundRecording'
import Device from '../screens/Device'
import Settings from './settingsNav'
import newSoundIcon from '../../assets/newSoundIcon.png'
import newSoundNab from './newSoundNav'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tabs = createMaterialBottomTabNavigator();

const NavBar = ({navigation}) => {

  let visibility = 'visible'
  const setNull = () => {
    console.log('Add')
  }

  return (
    <Tabs.Navigator
      barStyle={{ backgroundColor: '#222624'}}
      labeled={false}
      style={{visibility: 'visible'}}
    >
      <Tabs.Screen name="Notification" component={Notifications} /*options={{ tabBarShowLabel: false, color: 'black'}} />*/options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell-outline" color={color} size={26} />
          ),
        }} />
      <Tabs.Screen name="SoundsPage" component={SoundsPage} /*options={{ tabBarShowLabel: false, color: 'black'*/ options={{
        tabBarLabel: '',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="music" color={color} size={26} />
        ),
      }} />
      <Tabs.Screen name="add" component={newSoundNab} /*options={{ /*tabBarShowLabel: false, color: 'black'*/ options={{
        barStyle: {
          opacity: 0,
        },
        tabBarLabel: '',
        tabBarIcon: ({ color }) => (
          <Image source={newSoundIcon} style={{height:29, width:29}} tintColor={color}/>
        ),
      }} />
      <Tabs.Screen name="Device" component={Device} /*options={{ /*tabBarShowLabel: false, color: 'black',*/options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="router-wireless" color={color} size={26} />
          ), 
      }}/>
      <Tabs.Screen name="Settings" component={Settings} /*options={{ /*tabBarShowLabel: false, color: 'black'*/options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog-outline" color={color} size={26} />
          ),
      }} />
    </Tabs.Navigator>
  );
}

export default NavBar;

