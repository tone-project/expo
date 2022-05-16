import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingTurnOn from '../screens/onboardingTurnOn';
import OnboardingWifi from '../screens/onboardingWifi';
import OnboardingSync from '../screens/ondoardingSync';
import OnboardingConnected from '../screens/onboardingConnected'
import OnboardingFinish from '../screens/onboardingFinish';


const Stack = createStackNavigator();

const OnboardingNav = () => {
      return (
            <Stack.Navigator screenOptions = {{headerShown: false}}>
                  <Stack.Screen name='OnboardingTurnOn' component={OnboardingTurnOn}/> 
                  <Stack.Screen name='OnboardingWifi' component={OnboardingWifi}/>
                  <Stack.Screen name='OnboardingSync' component={OnboardingSync}/>
                  <Stack.Screen name='OnboardingConnected' component={OnboardingConnected}/>
                  <Stack.Screen name='OnboardingFinish' component={OnboardingFinish}/>
                  {/* <Stack.Screen name='Status' component={Status}/> */}
            </Stack.Navigator>
      );
}

export default OnboardingNav;