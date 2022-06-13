import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native'
import { CommonActions } from '@react-navigation/native'

import Logo from '../svg/logo';
import Heading from '../components/heading';
import Input from '../components/input';
import CustomButton from '../components/customButton';
import CustomText from '../components/customText';

import userStore from '../store/userStore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const emailCheck = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

const LoginSingIn = ({navigation}) => {
    const[email, changeEmail]=useState('');
    const[password, changePassword]=useState('');

    const handleLogin = () =>{
        userStore.signIn(email, password)
        // signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('auth: ', userStore.auth)
                navigation.getParent().dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [
                            {name: 'NavBar'},
                        ],
                    })
                )
            })
            .catch(error => console.log(error.message))
    }

    return(
        <View style={styles.container}>
            <View style={styles.logoWrapper}>
                <Logo/>
            </View>
            <View style={styles.title}>
                <Heading >Вхід</Heading>
            </View>
            <View style={[styles.input,{ marginTop: 29}]}>
                <Input
                    check={emailCheck}
                    label='Електронна пошта'
                    value={email}
                    onChangeValue={changeEmail}
                />
            </View>
            <View style={styles.input}>
                <Input
                    label='Пароль'
                    value={password}
                    onChangeValue={changePassword}
                />
            </View>
            <CustomButton
                style={{marginTop: 6}}
                value={'Далі'}
                onPress={handleLogin}
            />
            <View style={styles.textWrapper}>
                <CustomText>Або</CustomText>
            </View>
            <View style={styles.social}>
                <CustomButton
                    transparent
                    style={styles.button}
                    value={'Facebook'}
                    onPress={()=>console.log('Facebook')}
                />
                <CustomButton
                    transparent
                    style={styles.button}
                    value={'Google'}
                    onPress={()=>console.log('Google')}
                />
            </View>
        </View>
    )
}

export default LoginSingIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        alignItems: 'center',
        padding: 16,
    },
    logoWrapper: {
        marginTop: 115,
    },
    title: {
        marginTop: 20, 
    },
    input:{
        width: '100%'
    },
    textWrapper: {
        marginTop: 21,
    },
    social: {
        marginTop: 19,
        flex: 1,
        flexDirection: 'row',
        height: 56,
        width: '100%',
        justifyContent: 'space-between',
    },
    button: {
        width: '47.5%',
    }
})