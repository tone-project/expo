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
            <View style={styles.item}>
                <Text style = {styles.text}>{deviceStatus.capacity}%</Text>
                <View style = {styles.battery}>
                    <Battery capacity={deviceStatus.capacity}/>      
                </View>
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
        //marginLeft: '282%',
        marginTop: '5%'
    }
})

export default Status