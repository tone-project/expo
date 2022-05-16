//import { toNamespacedPath } from 'path/posix';
//import { navRight } from '@aws-amplify/ui';
import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, Button, TouchableOpacity, View, HStack, Image, width, height, FastImage, backgroundColor, ImageBackground, alignItems, ScrollView, Platform, setTitleText, bodyText, size} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import /*Ionicons*/Icon from 'react-native-vector-icons/Ionicons'
//import { Icon } from 'react-native-elements'

import deviceImange from '../../assets/device3.png'

const Device = () => {
    /*var device = 'CONNECT';
if(device != 'CONNECT'){*/
    return (
        <View style={{
            width: '100%', height: '100%', backgroundColor: 'white'
        }}>
            <View>
                <Text style={styles.baseText}>
                    Пристрій
                </Text>
            </View>
            <View style={{
                width: 300, height: 300, alignItems: 'center'
            }}>
                <Image source={deviceImange} style={{ width: '100%', height: '100%', aspectRatio: 1, marginLeft: 60, marginTop: 20, }} />
            </View>
            <View style={{left: '3%'}}>
                <View style={styles.ViewStale1}>
                    <Icon name="ios-barcode-outline" size={40} color="black" />
                    <Text style={styles.textStale}>
                        34fg-dfhhg-44h67-gjgd5
                    </Text>
                    <View
                        style={styles.ViewStale}
                    />
                </View>
                <View>
                    <Icon name="ios-pulse" size={40} color="black" />
                    <Text style={styles.textStale}>
                        Статус
                    </Text>
                    <View
                        style={styles.ViewStale}
                    />
                    <View style={styles.Iconstyle1}>
                        <Text style={{ color: "red" }}>Не підключено</Text>
                    </View>
                </View>
                <View>

                    <Icon name={'ios-wifi'} size={40} color="black"  />
                    <Text style={styles.textStale}>
                        Рівень сигналу
                    </Text>
                    <View
                        style={styles.ViewStale}
                    />
                    <View style={styles.Iconstyle}>
                        <Icon name="ios-wifi-outline" size={40} color="red" />
                    </View>
                </View>
                <View>

                    <Icon name={'ios-battery-dead'} size={40} color="black" />
                    <Text style={styles.textStale}>
                        Батарея
                    </Text>
                    <View style={styles.Iconstyle2}>
                        <Icon name="ios-battery-charging" size={40} color="red" />
                    </View>
                </View>
            </View >
        </View >
    );
}

       
export default Device;

const styles = StyleSheet.create({

    baseText: {
        //fontFamily: "Cochin",
        fontSize: 27,
        fontWeight: "700",
        marginTop: 30,
        marginLeft: '3%',
    },
    baseText1: {
        //fontFamily: "Cochin",
        fontSize: 23,
        fontWeight: "700",
        marginTop: 130,
        marginLeft: 19,
        right: 10,
    },
    baseText2: {
        //fontFamily: "Cochin",
        marginTop: 20,
        fontSize: 15,
        fontWeight: "400",
        marginLeft: 19,
        right: 10,
    },
    textStale: {
        alignItems: 'center',
        position: 'absolute',
        top: 13, left: 60,
        fontSize: 15,
        fontWeight: "500",
    },
    ViewStale: {
        marginTop: 5,
        borderBottomColor: '#e9e9e9',
        borderBottomWidth: 1.1,
        width: '92.5%',
        left: '0.5%'
    },
ViewStale1: {
        marginTop: 30,
    },
    Iconstyle: {
        position: 'absolute',
        left: 322, top: 2,
        bottom: 2,
    },
    Iconstyle1: {
        position: 'absolute',
        left: 270, top: 15,
        fontSize: 12,
        fontWeight: "600",
    },
    Iconstyle2: {
        position: 'absolute',
        left: 322, bottom: 2
    },
})