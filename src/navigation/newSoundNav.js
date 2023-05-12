import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import NewSoundRecording from '../screens/newSoundRecording';
import NewSoundDetails from '../screens/newSoundDetails';  
import NewSoundProbability from '../screens/newSoundProbability';
import SoundsPage from '../screens/soundsPage';

const Stack = createStackNavigator();

const NewSoundNav = () => {
    return (
      <Stack.Navigator screenOptions = {{headerShown: false}}>
        <Stack.Screen name='NewSoundRecording' component={NewSoundRecording} options={{title: 'Новий звук'}}/>
        <Stack.Screen name='NewSoundProbability' component={NewSoundProbability} options={{title: 'Новий звук'}}/>
        <Stack.Screen name='NewSoundDetails' component={NewSoundDetails} options={{title: 'Новий звук'}}/>
        <Stack.Screen name='soundsPage' component={SoundsPage}options={{title:''}}/> 
      </Stack.Navigator>
    );
}

export default NewSoundNav;