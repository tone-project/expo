import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Image, BackHandler } from 'react-native';
import Heading from '../components/heading';
import Loader from '../components/loader';
const OnboardingSync = ({navigation}) => {
    
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', function() {return true})
        setTimeout(() => navigation.navigate('OnboardingConnected'), 5000)
    }, [])

  return(
    <View style={styles.container}>
        <View style={styles.image}>
            <Image
                source={require('../../assets/device2.png')}
                style={styles.logo}
            />
        </View>
        <View style={styles.h1Wrapper}>
            <Heading>Синхронізуємо</Heading>
        </View>
        <View style={styles.loader}>
            <Loader/>
        </View>
    
    <StatusBar style="light" />
  </View>
  )
}

export default OnboardingSync

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        flex: 2, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        width: 360,
        height: 330,
    },
    h1Wrapper:{
        marginTop: 32,
        width: 328,
        height: 32,
    },
    loader:{
        width: 96,
        height: 96,
        marginBottom: 72,
        marginTop: 78,
    }
});
  