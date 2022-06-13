import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native'


import Logo from '../svg/logo';
import Heading from '../components/heading';
import Input from '../components/input';
import CustomButton from '../components/customButton';
import CustomText from '../components/customText';

const emailCheck = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/

import userStore from '../store/userStore';

const LoginName = ({navigation, route}) => {
    const[name, changeName]=useState('')
    const[secondName, changeSecondName]=useState('')

    const handleRegister = () => {
        navigation.navigate('LoginPassword', {
            email: route.params.email,
            name: name,
            secondName: secondName,
        })
    }

    return(
        <View style={styles.container}>
            <View style={styles.logoWrapper}>
                <Logo/>
            </View>
            <View style={styles.title}>
                <Heading>Вітаємо!</Heading>
            </View>
            <View style={styles.textWrapper}>
                <CustomText>Створіть акаунт для {userStore.email}</CustomText>
            </View>
            <View style={styles.input}>
                <Input
                    label="Ім'я"
                    value={name}
                    onChangeValue={changeName}
                    check={emailCheck}
                />
            </View>
            <View style={styles.input}>
                <Input
                    label='Прізвище'
                    value={secondName}
                    onChangeValue={changeSecondName}
                    check={emailCheck}
                />
            </View>
            <CustomButton
                style={{marginTop: 2}}
                value={'Далі'}
                onPress={handleRegister}
            />
        </View>
    )
}

export default LoginName;

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
        marginTop: 21,
        width: '100%'
    },
    textWrapper: {
        marginTop: 21,
    },
})