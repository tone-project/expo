import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginStart from '../screens/loginStart';
import LoginRegistrations from '../screens/loginRegistration';
import LoginName from '../screens/loginName';
import LoginPassword from '../screens/loginPassword';
import LoginSingIn from '../screens/loginSingIn';

const Stack = createStackNavigator();

const LoginNav = () => {
    return (
          <Stack.Navigator screenOptions = {{headerShown: false}}>
                <Stack.Screen name='LoginStart' component={LoginStart}/> 
                <Stack.Screen name='LoginRegistrations' component={LoginRegistrations} options={{title: 'Новий звук'}}/>
                <Stack.Screen name='LoginName' component={LoginName} options={{title: 'Новий звук'}}/>
                <Stack.Screen name='LoginPassword' component={LoginPassword} options={{title: 'Новий звук'}}/>
                <Stack.Screen name='LoginSingIn' component={LoginSingIn} options={{title: 'Новий звук'}}/>
          </Stack.Navigator>
    );
}

export default LoginNav;