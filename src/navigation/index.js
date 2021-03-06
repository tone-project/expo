import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginNav from './loginNav';
import OnboardingNav from './onboardingNav';
import NewSoundNav from './newSoundNav';
import NavBar from './navBar';
import settingsNav from './settingsNav';
import Notifications from '../screens/notifications';

const Stack = createStackNavigator();

const Navigator = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions = {{ 
            headerTransparent: true,
            headerTintColor: '#F2F2F2',
            headerTitleStyle: {
                color: '#F2F2F2',
                fontFamily: 'Inter_700Bold',
            },
            headerTitleAlign: 'center',
        }}
      >
        {/* <Stack.Screen name='LoginNav' component={LoginNav} options={{headerShown: false }}/> */}
        {/* <Stack.Screen name='OnboardingNav' component={OnboardingNav} options={{headerShown: false }}/> */}
         <Stack.Screen name='NavBar' component={NavBar} options={{headerShown: false }}/> 
        {/* <Stack.Screen name='settingsNav' component={settingsNav} options={{headerShown: false }}/> */}
        {/* <Stack.Screen name='NewSoundNav' component={NewSoundNav} options={{headerShown: false }}/> */}
        {/* <Stack.Screen name='Notifications' component={Notifications} options={{headerShown: false }}/> */}

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator;