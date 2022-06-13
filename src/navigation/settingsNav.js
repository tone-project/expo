import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import settingsProfile from '../screens/settingsProfile' ;
import settings from '../screens/settings';
import feedback from '../screens/feedback';
import loginNav from './loginNav';
const Stack = createStackNavigator();

const settingsNav = () => {
    return (
      <Stack.Navigator /*screenOptions = {{headerShown: false}}*/>
        <Stack.Screen name='settings' component={settings} options={{title: 'Профіль', headerShown: false}}/>
        <Stack.Screen name='settingsProfile' component={settingsProfile} options={{title: 'Профіль'}}/>
<Stack.Screen name='loginNav' component={loginNav} options={{title: "login", headerShown: false}}/>
        <Stack.Screen name='feedback' component={feedback} options={{title: "Зворотній зв`язок"}}/>    
      </Stack.Navigator>
    );
}

export default settingsNav;