import React from "react"
import { StyleSheet, Text, View} from 'react-native';
import OnlineStatus from '../svg/onlineStatus'
import Signal from '../svg/signal';
import Battery from '../svg/battery';

import deviceStatus from "../store/deviceStatus";

import {observer} from 'mobx-react'

// const ONLINE = false;
// const CAPACITY = 99;
// const SIGNAL = 1;

const Status = observer(({capacity}) => {
    return(
        <View /*style={styles.statusbar}*/>
            <View style={[styles.item, {borderColor: '#E8E8E8'}, /*{borderRightWidth: 1}*/]}>
                <View style = {styles.online_status}>
                    <OnlineStatus online={deviceStatus.online}/>
                </View>
                <Text style = {styles.text}>{deviceStatus.online ? 'ОНЛАЙН' : 'OФЛАЙН'}</Text>
            </View>
    </View>
    )
})

const styles = StyleSheet.create({
   
    statusbar:{
        padding: 12,
        flexDirection: "row",
        // marginTop: 24,
        width: 328,
        height: 48,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 8,
    },
    online_status:{
        marginRight: 4,
    },  
    battery:{
        marginLeft: 6.5,
    },
    text:{
        fontFamily: 'Inter_700Bold',
        fontSize: 12,
        lineHeight: 16,
        textAlign: 'center',
    },  
    item:{
        flex: 1,
        //width: '%30',
        //height: 'auto',
        //justifyContent: 'right',
        //alignItems: 'center',
        flexDirection: "row",
        marginLeft: '77.5%',
        marginTop: '-6%',
        position: 'absolute'
    }
})

export default Status