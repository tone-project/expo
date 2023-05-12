import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, BackHandler } from 'react-native';
import CustomView from '../components/customView';
import Status from '../components/status';

import StatusChange from '../test/stutusChange';

const SoundsPage = ({navigation}) => {
    return(
        <View style={styles.container}>
            <CustomView style={styles.status}>
                <Status/>
            </CustomView>
            <StatusChange/>
            <StatusBar style="dark"/>
        </View>
    )
}

export default SoundsPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    status: {
        marginTop: 24,
    },
    statusbar:{
        padding: 12,
        marginTop: 24,
        width: 328,
        height: 48,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 8,
    },
    online_status:{
        marginRight: 4,
    },  
    text:{
        fontFamily: 'Inter_700Bold',
        fontSize: 12,
        lineHeight: 16,
        textAlign: 'center',
    },  
    item:{
        flex: 1,
        width: 'auto',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
