import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image, BackHandler} from 'react-native';

import Sliders from '../svg/sliders';
import Separator from '../svg/separator';

import CustomText from '../components/customText';
import BoldText from '../components/boldText';
import Heading from '../components/heading';
import CustomButton from '../components/customButton';

const OnboardingWifi = ({navigation}) => {
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', function() {return true})
    }, [])

    return(
        <View style={styles.container}>
            <View style={styles.picture}>
                <Image
                    source={require('../../assets/wifiSetings.png')}
                    style={styles.image}
                />
                <View  style={{width: 312, height: 1}}>
                    <Separator />
                </View>
            </View>
            <View style={styles.h1Wrapper}>
                <Heading>Приєднайтеся до{'\n'}пристрою через WI-FI</Heading>
            </View>
            <View style={styles.textWrapper}>
                <CustomText>
                    Перейдіть в налаштування і виберіть{'\n'}<BoldText>tOne_wifi.</BoldText> Пароль вказано в коробці
                </CustomText>
            </View>
            <View style={styles.sliders}>
                <Sliders lighten={2}/>
            </View>
            <CustomButton
                transparent
                style={styles.button} 
                onPress={() => navigation.navigate('OnboardingSync')} 
                value='В налаштування'
            />
            <StatusBar style="light" />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1A1A1A',
        padding: 16,
    },
    picture:{
        marginTop: 58,
        flex: 2, 
        width: 192,
        height: 265,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 192,
        height: 258,
    },
    h1Wrapper:{
        marginTop: 41,
        width: 328,
        height: 64,
    },
    textWrapper:{
        width: 328,
        height: 40,
        marginTop: 21,
    },
    sliders:{
        marginTop: 47,
        height: 2,
        width: 152,
    },
    button:{
        marginTop: 24,
        marginBottom: 24,
    },
})
    
    export default OnboardingWifi