import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native'
import { CommonActions } from '@react-navigation/native'

import Logo from '../svg/logo';
import Heading from '../components/heading';
import Input from '../components/input';
import CustomButton from '../components/customButton';
import userStatus from '../store/userStore';

const LoginPassword = ({navigation, route}) => {
    const {email, name, secondName} = route.params;
    const[password, changePassword]=useState('')
    const handleSingUp = () =>{
        userStatus.register(email, password)
        .then(() => navigation.getParent().dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    {name: 'OnboardingNav'},
                ],
            })
        ))
        .catch(error => console.log(error.message))
    }

    return(
        <View style={styles.container}>
            <View style={styles.logoWrapper}>
                <Logo/>
            </View>
            <View style={styles.title}>
                <Heading>Створіть пароль</Heading>
            </View>
            <View style={styles.input}>
                <Input
                    label='Пароль'
                    value={password}
                    onChangeValue={changePassword}
                />
            </View>
            <CustomButton
                style={{marginTop: 2}}
                value={'Далі'}
                onPress={handleSingUp}
            />
        </View>
    )
}

export default LoginPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        alignItems: 'center',
        padding: 16,
        // justifyContent: 'center',
    },
    logoWrapper: {
        marginTop: 88,
    },
    title: {
        marginTop: 28, 
    },
    input:{
        marginTop: 72,
        width: '100%'
    },
    textWrapper: {
        marginTop: 21,
    },
})