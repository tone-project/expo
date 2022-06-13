import React from "react"
import { StyleSheet, Text, View} from 'react-native';
import OnlineStatus from '../svg/onlineStatus'
import Signal from '../svg/signal';
import Battery from '../svg/battery';
import DogStatus from '../svg/DogStatus';
import TeapotStatus from '../svg/TeapotStatus';
import TalkStatus from '../svg/TalkStatus';
import SlienceStatus from '../svg/SlienceStatus';

import moment from 'moment';
import deviceStatus from "../store/deviceStatus";

import {observer} from 'mobx-react'

var now1 = moment().format("HH:MM");
// const ONLINE = false;
// const CAPACITY = 99;
// const SIGNAL = 1;
const Status2 = observer(({capacity}) => {
    return(
        <View /*style={styles.statusbar}*/>
             <View style={[styles.item, {borderColor: '#E8E8E8'}, /*{borderRightWidth: 1}*/]}>
             
                <Text style = {styles.text}>{deviceStatus.dogstatus ? 'Звук собаки                  '+ now1 : ''}</Text>
            </View>
            <View style={[styles.item, {borderColor: '#E8E8E8'}, /*{borderRightWidth: 1}*/]}>
                
                <Text style = {styles.text}>{deviceStatus.talkstatus ? 'Звук розмови людей     '+ now1 : ''}</Text>
            </View>
            <View style={[styles.item, {borderColor: '#E8E8E8'}, /*{borderRightWidth: 1}*/]}>
               
                <Text style = {styles.text}>{deviceStatus.teapotstatus ? 'Звук чайника            '+ now1 : ''}</Text>
            </View>
             <View style={[styles.item, {borderColor: '#E8E8E8'}, /*{borderRightWidth: 1}*/]}>
                
                <Text style = {styles.text}>{deviceStatus.sliencestatus ? 'Звук тишини           '+ now1 : ''}</Text>
            </View>
<View style={[styles.item, {borderColor: '#E8E8E8'}, /*{borderRightWidth: 1}*/]}>
                <View style = {styles.online_status}>
                    <OnlineStatus online={deviceStatus.online}/>
                </View>
                <Text style = {styles.text}>{deviceStatus.online ? 'Пристрій працює    '+ now1 : 'Пристрій не працює '+ now1}</Text>
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
        //fontFamily: 'Inter_400Bold',
        fontSize: 20,
        //lineHeight: 16,
       //textAlign: 'right',
//marginRight: '90%',
marginRight: '21%',
//marginTop: '5%',
fontWeight: "400",
//alignItems: 'left',
},
    item:{
        flex: 1,
        width: 'auto',
        height: 'auto',
        justifyContent: 'left',
        alignItems: 'center',
        flexDirection: "row",
        marginTop: '15%'
        
    },
})

export default Status2