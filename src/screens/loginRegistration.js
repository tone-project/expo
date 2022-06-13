import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native'


import Logo from '../svg/logo';
import Heading from '../components/heading';
import Input from '../components/input';
import CustomButton from '../components/customButton';
import CustomText from '../components/customText';
import userStatus from '../store/userStatus';

const emailCheck = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

const LoginRegistrations = ({navigation}) => {
    const[email, changeEmail]=useState('')
    const[beingChecked, setBeingChecked]=useState(false)
    const handleRegistration = () => {
        console.log('handleRegistration')
        if(emailCheck.exec(email)){
            userStatus.setEmail(email)
            navigation.navigate('LoginName')
        }else {
            setBeingChecked(true);
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.logoWrapper}>
                <Logo/>
            </View>
            <View style={styles.title}>
                <Heading >Реєстрація</Heading>
            </View>
            <View style={styles.input}>
                <Input
                    label='Електронна пошта'
                    value={email}
                    onChangeValue={changeEmail}
                    checkValue={emailCheck}
                    beingChecked={beingChecked}
                />
            </View>
            <CustomButton
                style={{marginTop: 6}}
                value={'Далі'}
                onPress={handleRegistration}
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

export default LoginRegistrations;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        alignItems: 'center',
        padding: 16,
        // justifyContent: 'center',
    },
    logoWrapper: {
        marginTop: 152,
    },
    title: {
        marginTop: 20, 
    },
    input:{
        marginTop: 112,
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