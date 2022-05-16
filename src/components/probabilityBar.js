import React from "react";
import { StyleSheet, View, Text , TouchableHighlight } from "react-native";

import metrix from "../../assets/metrix";

import YesIcon from '../svg/icons/yes';
import NoIcon from '../svg/icons/no';
import UndefinedIcon from '../svg/icons/undefine';

const ProbabilityBar = ({probabilityValue, dark, navigation, disabledYesBtn}) => {
    return(
        <View style={[styles.probabilityBar, {backgroundColor: dark ? '#313533' : '#F2F2F2'}]}>
            <View style={styles.textWrapper}>
                <Text style={[styles.text,{color: dark ? '#F2F2F2': '#222624'}]}>
                    Ми на <Text style={styles.textBold}>{probabilityValue}%</Text> впевнені, що це звук гавкання собаки.{'\n'} Це гавкіт собаки?
                </Text>
            </View>
            <View style = {styles.bottons}>
                <TouchableHighlight 
                    underlayColor="rgba(46, 198, 143, 0.25)" 
                    style={[styles.TouchableHighlight, disabledYesBtn ? styles.isDisabled : '']} 
                    onPress={() => navigation.navigate('NewSoundDetails')}
                    disabled={disabledYesBtn} 
                >
                    <View style={styles.button}>
                        <YesIcon/>
                        <Text style={styles.buttonText}>ТАК</Text>
                    </View>
                </TouchableHighlight >
                <TouchableHighlight 
                    underlayColor="rgba(46, 198, 143, 0.25)" 
                    style={styles.TouchableHighlight} 
                    onPress={() => console.log('asdasd')}
                >
                    <View style={styles.button}>
                        <NoIcon/>
                        <Text style={styles.buttonText}>НІ</Text>
                    </View>
                </TouchableHighlight >
                <TouchableHighlight 
                    underlayColor="rgba(46, 198, 143, 0.25)" 
                    style={styles.TouchableHighlight} 
                    onPress={() => console.log('asdasd')}
                >
                    <View style={styles.button}>
                        <UndefinedIcon/>
                        <Text style={styles.buttonText}>НЕ ЗНАЮ</Text>
                    </View>
                </TouchableHighlight >
            </View>
        </View>
    )
}

export default ProbabilityBar;


const styles = StyleSheet.create({
    probabilityBar: {   
        width: '100%',
        // width: metrix.x,
        alignItems: 'center',
        height: 188,
        borderRadius: 12,
        // padding: 16,
        paddingVertical: 16,
        paddingHorizontal: metrix.WIDTH > 360 ? (16 * 1.3 * (metrix.WIDTH)/360) : 16,
    },
    textWrapper: {
        width: '100%',
        height: 68,
    },
    text: {
        fontFamily: 'Inter_600SemiBold',
        fontSize: 12 + 3 * (metrix.WIDTH/360),
        lineHeight: 30,
    },
    textBold:{
        fontFamily: 'Inter_600SemiBold',
        color: '#2EC68F',
        fontSize: 15,
        lineHeight: 20,
        textAlign: 'center',
        alignContent: 'center',
    },
    bottons: {
        flex: 1,
        width: '100%',
        // maxWidth: 298,
        // justifyContent: 'space-evenly',
        height: 66,
        marginTop: 23,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingHorizontal: 16,
        // backgroundColor: 'yellow'
    },
    TouchableHighlight: {
        borderColor: 'rgba(46, 198, 143, 0.5)',
        borderWidth: 1,
        borderRadius: 8,
    },
    button: {
        height: 66,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: metrix.WIDTH >= 360 ? (66 + 22 * (metrix.WIDTH)/360) : (66 + 22 * Math.abs(((metrix.WIDTH-280)/80))),
    },
    buttonText: {
        fontFamily: 'Inter_700Bold',
        color: '#2EC68F',
        fontSize: 12,
        lineHeight: 16,
        alignItems: 'center',
    },
    isDisabled: {
        backgroundColor: "rgba(46, 198, 143, 0.25)",
    }
})
