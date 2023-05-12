import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native'

import Logo from '../svg/logo';

import CustomButton from '../components/customButton';

const LoginStart = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.logoWrapper}>
                <Logo/>
            </View>
            <View style={styles.imegeWrapper}>
                <Image
                    source={require('../../assets/login.png')}
                    style={styles.image}
                />
            </View>
            <CustomButton
                value={'Зареєструватися'}
                onPress={()=>navigation.navigate('LoginRegistrations')}
                style={{marginTop: 70}}
            />
            <CustomButton
                transparent
                value={'Увійти'}
                onPress={()=>navigation.navigate('LoginSingIn')}
                style={{marginTop: 24}}
            />
        </View>
    )
}

export default LoginStart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        alignItems: 'center',
        padding: 16,
        // justifyContent: 'center',
    },
    logoWrapper: {
        width: 90,
        height: 28,
        marginTop: 54,
    },
    imegeWrapper: {
        width: 445,
        height: 356,
    },
    image: {
        width: 445,
        height: 356,
    }
})