import React, { useState, useRef, useEffect } from "react";
import {StyleSheet, View, Text, TouchableHighlight, TouchableOpacity, Modal} from "react-native";
import ModalPiker from '../components/modalPiker'
import DropDown from "../svg/icons/dropDown";

import notificationsModel from "../store/notificationsModel";

const Getnotifications = () => {
    return(
        <View style={styles.wrapper}>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => {
                    notificationsModel.getNotifications();
                    notificationsModel.clearNotificationsInTenSec();
                }
            }
            >
            <Text style={styles.buttonText}> get </Text>
        </TouchableOpacity>
        </View>
    )
}

export default Getnotifications;

const styles = StyleSheet.create({
    handleButton: {
        alignItems: 'center',
        borderColor:  '#2EC68F',
        borderWidth: 4,
        borderRadius: 23,
        marginTop: 3,
    },
    touchableHighlight: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#7A7D7C',
    },
    button: {
        height: 56,
        width: 128,
        borderColor:  '#2EC68F',
        borderWidth: 4,
        borderRadius: 23,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
})