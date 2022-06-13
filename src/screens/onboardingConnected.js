import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, BackHandler  } from 'react-native';
import CustomText from '../components/customText';
import Heading from '../components/heading';
import Sliders from '../svg/sliders';
import CustomButton from '../components/customButton';

const OnboardingConnected = ({navigation}) => {

useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', function() {return true})
}, [])

    return(
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image
                    source={require('../../assets/device3.png')}
                    style={styles.image}
                />
            </View>
            <View style={styles.h1Box}>
                <Heading>Пристрій приєднано!</Heading>
            </View>
            <View style={styles.textWrapper}>
                <CustomText>
                    Для продовження перевірте підключення{'\n'} до домашнього Wi-Fi
                </CustomText>
            </View>
            <View style={styles.sliders}>
                <Sliders lighten={3}/>
            </View>
            <CustomButton 
                transparent
                style={styles.button} 
                onPress={() => navigation.navigate('OnboardingFinish')} 
                value='Далі'
            />                
            <StatusBar style="light"/>
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    imageWrapper:{
        flex: 2, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        width: 360,
        height: 328,
    },
    h1Box:{
        width: 328,
        height: 32,
    }, 
    textWrapper:{
        width: 328,
        height: 40,
        marginTop: 21,
    },
    sliders:{
        marginTop: 79,
        height: 2,
        width: 152,
    },
    button:{
        marginTop: 24,
        marginBottom: 24,
    },
})

export default OnboardingConnected