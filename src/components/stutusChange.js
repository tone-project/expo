import React from 'react';
import {StyleSheet, View, TouchableOpacity,Text} from "react-native";
import CustomView from './customView';

import deviceStatus from "../store/deviceStatus";

import CustomButton from './customButton';

import {observer} from 'mobx-react'

const StatusChange = observer(() => {
    return(
        <View style={styles.wrapper}>
            <View
                style={styles.controls}
            >
                <View
                    style={styles.buttons}
                >
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={deviceStatus.reduceTenCapacity}
                    >
                        <Text> -10 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={deviceStatus.reduceOneCapacity}
                    >
                        <Text> -1 </Text>
                    </TouchableOpacity>
                </View>
            <Text>{deviceStatus.capacity}</Text>  
                <View
                    style={styles.buttons}
                >
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={deviceStatus.addOneCapacity}
                    > 
                        <Text> +1 </Text>  
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={deviceStatus.addTenCapacity}
                    > 
                        <Text> +10 </Text>  
                    </TouchableOpacity>
                </View>
            </View> 
            <View
                style={styles.controls}
            >
                <View
                    style={styles.buttons}
                >
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={deviceStatus.setMinSignalLevel}
                    >
                        <Text> min </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={deviceStatus.reduceOneSignalLevel}
                    >
                        <Text> -1 </Text>
                    </TouchableOpacity>
                </View>
            <Text>{deviceStatus.signal}</Text>  
                <View
                    style={styles.buttons}
                >
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={deviceStatus.addOneSignalLevel}
                    > 
                        <Text> +1 </Text>  
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={deviceStatus.setMaxSignalLevel}
                    > 
                        <Text> max </Text>  
                    </TouchableOpacity>
                </View>
            </View> 
            <View
                style={styles.controls}
            >
                <View
                    style={styles.buttons}
                >
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={deviceStatus.setTrueOnline}
                    >
                        <Text> online </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={deviceStatus.setFalseOnline}
                    >
                        <Text> ofline </Text>
                    </TouchableOpacity>
                </View>
            </View> 
            <View
                style={styles.controls}
            >
                <View
                    style={styles.buttons}
                >
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={deviceStatus.setTrueDog}
                    >
                        <Text> Dog </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={deviceStatus.setFalseDog}
                    >
                        <Text> not Dog </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View
                style={styles.controls}
            >
                <View
                    style={styles.buttons}
                >
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={deviceStatus.setTrueTalk}
                    >
                        <Text> Talk </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={deviceStatus.setFalseTalk}
                    >
                        <Text> not Talk </Text>
                    </TouchableOpacity>
                </View>
            </View> 
            <View
                style={styles.controls}
            >
                <View
                    style={styles.buttons}
                >
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={deviceStatus.setTrueTeapot}
                    >
                        <Text> Teapot </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={deviceStatus.setFalseTeapot}
                    >
                        <Text> not Teapot </Text>
                    </TouchableOpacity>
                </View>
            </View> 
           <View
                style={styles.controls}
            >
                <View
                    style={styles.buttons}
                >
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={deviceStatus.setTrueSlience}
                    >
                        <Text> Slience </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={deviceStatus.setFalseSlience}
                    >
                        <Text> not Slience </Text>
                    </TouchableOpacity>
                </View>
            </View>  
        </View>
    )
})

export default StatusChange;

const styles = StyleSheet.create({
    wrapper: {
        //flexDirectio: 'row',
        backgroundColor: '#2226BF',
        alignItems:'center',
        width:  140,
        height: 1000
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width:  '100%',
        padding: 10,
    },
    buttons: {
        width: 140,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        height: 56,
        backgroundColor: '#2E26BF',
        width: 56,
        borderColor:  '#2EC68F',
        borderWidth: 4,
        borderRadius: 23,
        justifyContent: 'center',
        alignItems: 'center',
    },
})