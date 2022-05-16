import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import { withNavigation } from 'react-navigation';


import ProbabilityBar from '../components/probabilityBar';

import PlayIcon from '../svg/icons/play';
import RererecordIcon from '../svg/icons/rerecord';

import CustomView from "../components/customView";

const NewSoundScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <StatusBar style="light" />
            <CustomView>
                <View style={styles.soundsActions}>
                    <TouchableHighlight underlayColor="#313533" style={styles.TouchableHighlight} onPress = {() => console.log('Прослухати')}>
                        <View style={styles.button}>
                            <PlayIcon/>
                            <Text style={styles.text}>Прослухати</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#313533" style={styles.TouchableHighlight} onPress = {() => console.log('Переписати')}>
                        <View style={styles.button}>
                            <RererecordIcon/>
                            <Text style={styles.text}>Переписати</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.probabilityBar}>
                    <ProbabilityBar probabilityValue={86} navigation={navigation}/>
                </View>
            </CustomView>
        </View>
    )
}

export default withNavigation(NewSoundScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    probabilityBar: {
        marginBottom: 24,
    },
    soundsActions: {
        width: 330,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 40,
    },
    TouchableHighlight: {
        width: 156,
        height: 40,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#7A7D7C',
    },
    button: {
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
    },
    text: {
        fontFamily: 'Inter_400Regular',
        color: '#F2F2F2',
        fontSize: 15,
        lineHeight: 20,
    }
})