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
            <View style={[styles.item, {borderColor: '#E8E8E8'},/* {borderRightWidth: 1}*/]}>
                <Signal signalLevel={deviceStatus.signal}/>
            </View>
    </View>
    )
})

const styles = StyleSheet.create({
   
    
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
        //width: '1%',
        //height: '40%',
        //justifyContent: 'right',
        alignItems: 'center',
        flexDirection: "row",
        marginLeft: '40%',
        marginTop: '-140%',
        position: 'absolute'
    }
})

export default Status