import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button, Image, CancelButton } from 'react-native'
import auth from '../components/firebase';
import avatar from '../../assets/avatar.png'
import { StatusBar } from 'expo-status-bar';
import StatusChange from '../components/stutusChange';
//import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import conf from './conf'


const SettignsProfile = () => {
    return (
        <View style={styles.container} /*style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}*/>
            <View style={styles.ImageWrapper}>
               <Image source={avatar} style={{ width: '100%', height: '100%', marginTop: '10%'}} />
            </View>
        </View>
    );
}

export default SettignsProfile;

const styles = StyleSheet.create({
    container: {
        /*flex: 1,
        justifyContent: 'center',*/
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%', 
        height: '100%',   
    },
    button: {
        /*backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',*/
        marginTop: '10%',
        //position: 'absolute',
    },
    buttonText: {
        color: '#e94d4d',
        fontWeight: '400',
        fontSize: 15,
        fontFamily: "Arial",
        height: 20

    },
    baseText: {
        //fontFamily: "Cochin",
        fontSize: 27,
        fontWeight: "700",
        marginTop: 30,
        marginRight: '41.5%',
    },
    status: {
        marginTop: 24,
    },
    statusbar:{
        padding: 12,
        flexDirection: "row",
        marginTop: 24,
        width: 328,
        height: 48,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 8,
    },
    ImageWrapper: {
        width: 140, 
        height: 140,
    },
})