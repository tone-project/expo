import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,BackHandler } from 'react-native';
import CustomButton from '../components/customButton';
import Heading from '../components/heading';
import DeviceStartBtn from '../svg/deviceStartBtn';
import Sliders from '../svg/sliders';

const OnboardingTurnOn = ({navigation}) => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', function() {return true})
  }, [])

  return(
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={require('../../assets/device1.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.h1Wrapper}>
        <Heading>Натисніть на кнопку,{'\n'}щоб увімкнути пристрій</Heading>
      </View>
    <TouchableOpacity style={styles.deviceStartBtn}>
      <DeviceStartBtn/>
    </TouchableOpacity>
    <View style={styles.sliders}>
      <Sliders lighten={1}/>
    </View>
    <CustomButton 
      transparent
      style={styles.button} 
      onPress={() => navigation.navigate('OnboardingWifi')} 
      value='Далі'
    />
    <StatusBar style="light"/>
  </View>
  )
}

export default OnboardingTurnOn

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1A1A1A',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
    },
    imageWrapper:{
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center',
    },
    image:{
      width: 360,
      height: 328,
    },
    h1Wrapper:{
      width: 328,
      height: 64,
    },
    deviceStartBtn:{ 
      height: 64,
      width: 64,
      marginTop: 21,
    },
    sliders:{
      marginTop: 23,
      height: 2,
      width: 152,
    },
    button: {
      marginTop: 24,
      marginBottom: 24,
    },
});
  