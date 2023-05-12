import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, HStack, Alert, backgroundColor, color, Image } from 'react-native'
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons'

import Info from '../../assets/info.png'

var now = moment().format("DD MMM");
var now1 = moment().format("HH:MM");

export default function footer() {

    var device = 'NOT_CONNECT';
if(device != 'CONNECT') {
return(
<View style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',/*width: '100%', height: '100%', aspectRatio: 1, backgroundColor: 'white', alignItems: 'center',*/}}>

           <Image source={Info} style={{ width: '60%', height: '32%', marginTop:'20%'}} />

<Text style={styles.baseText1}>
                    Пристрій не синхронізовано!
                </Text>
<Text style={styles.baseText2}>
      Немає доступу до інтернету
</Text>
</View>
            );
        }
else{
    return (
        <View style={{
            width: '100%', height: '100%', backgroundColor: 'white'
        }}>
            <Text style={styles.baseText}>
                Сповіщення
            </Text>
            <Text style={styles.ViewStale} >
                {now}
            </Text>
            <View style={styles.ViewStale2}>
                <Icon name={'checkmark-circle'} size={40} color="black" />
                <Text style={styles.textStale}>
                    Пристрій не підключено!
                </Text>
                <Text style={styles.ViewStale1}>
                    {now1}
                </Text>
                <View
                    style={styles.ViewStale3}
                />
            </View>
        </View>
    );
}
}

const styles = StyleSheet.create({

    baseText: {
        //fontFamily: "Cochin",
        fontSize: 25,
        fontWeight: "700",
        marginTop: 19,
        marginLeft: 19,
    },
    ViewStale: {
        color: '#a8a8a8',
        fontSize: 22,
        fontWeight: "400",
        marginTop: 12,
        marginLeft: 19,
    },
    textStale: {
        alignItems: 'center',
        position: 'absolute',
        top: 13, left: 60,
        fontSize: 15,
        fontWeight: "500",
    },
    ViewStale1: {
        color: '#a8a8a8',
        fontSize: 15,
        fontWeight: "400",
        marginLeft: 60,
    },
    ViewStale2: {
        marginTop: 20
    },
    ViewStale3: {
        marginTop: 15,
        borderBottomColor: '#e9e9e9',
        borderBottomWidth: 2,
    },
baseText1: {
        //fontFamily: "Cochin",
        fontSize: 23,
        fontWeight: "700",
        marginTop: '30%',
        left: '20%',
        right: 10,
    },
    baseText2: {
        //fontFamily: "Cochin",
        marginTop: 20,
        fontSize: 15,
        fontWeight: "400",
        left: '20%',
        right: 10,
    },
})