import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, BackHandler } from 'react-native';
import { CommonActions } from '@react-navigation/native'
import Sliders from '../svg/sliders';
import CustomText from '../components/customText';
import Heading from '../components/heading';
import CustomButton from '../components/customButton';

const OnboardingFinish = ({navigation}) => {
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', function() {return true})
    }, [])

    const handleButton = () => {
        navigation.getParent().dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    {name: 'NewSoundNav'},
                ],
            })
        )
    }

    return(
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image
                    source={require('../../assets/device4.png')}
                    style={styles.image}
                />
            </View>
            <View style={styles.h1Wrapper}>
                <Heading>Усе готово!</Heading>
            </View>
            <View style={styles.textWrapper}>
                <CustomText>
                    Можете приступати до користування
                </CustomText>
            </View>
            <View style={styles.sliders}>
                <Sliders lighten={4}/>
            </View>
            <CustomButton
                style={styles.button} 
                onPress={handleButton}
                value='Записати перший звук'
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
    h1Wrapper:{
        width: 328,
        height: 32,
    },
    textWrapper:{
        width: 328,
        height: 40,
        marginTop: 21,
    },
    sliders:{
        marginTop: 99,
        height: 2,
        width: 152,
    },
    button: {
        marginTop: 24,
        marginBottom: 24,
    }
})

export default OnboardingFinish