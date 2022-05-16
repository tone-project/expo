import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_700Bold, Inter_600SemiBold, Inter_500Medium, Inter_400Regular } from '@expo-google-fonts/inter';

import deviceStatus from './src/store/deviceStatus';

import Navigator from './src/navigation';


const App = () => {
  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_500Medium,
    Inter_400Regular,
  });


  if(!fontsLoaded){
    return (
      <AppLoading />
    )
  } else{
    return (
      <Navigator/>
    );
  }
}
export default App;