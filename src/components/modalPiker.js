import React from "react";
import {StyleSheet, View, Dimensions, TouchableHighlight, ScrollView } from "react-native";

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

import Option from "./modalPikerOption";

const OPTIONS = [
    {icon:'doorknock', description: 'Стукіт у двері'}, 
    {icon: 'doorbell', description: 'Дзвінок у двері'}, 
    {icon: 'bird', description: 'Спів птахів'}, 
    {icon: 'dog', description: 'Гавкіт собаки'}, 
    {icon: 'vacuumCleaner', description: 'Порохотяг'},
    {icon: 'whistlingKettle', description: 'Свист чайника'},
    {icon: 'microwave', description: 'Мікрохвильова піч'},
    {icon: 'thunderstorm', description: 'Грім'},
    {icon: 'wind', description: 'Сильний вітер'},
    {icon: 'clapping', description: 'Плескання'},
    {icon: 'clockAlarm', description: 'Будильник'},
]

const ModalPiker = ({changeModalVisibility, setSelectedValue}) => {

    const onPressItem = (item) => {
        changeModalVisibility(false)
        setSelectedValue(item)
    }

    return( 
        <TouchableHighlight 
            style={[styles.container]}
            onPress={() => changeModalVisibility(false)}
        >
            <View style = {styles.modal}>
                <ScrollView >
                    {OPTIONS.map((item, key) => {
                        return  (
                            <Option onPressItem={onPressItem} item={item} key={key}/>
                        )
                    })}
                </ScrollView>
            </View>        
        </TouchableHighlight>            
    )
}

export default ModalPiker;

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    text: {
        fontFamily: 'Inter_400Regular',
        color: '#FFFFFF',
        fontSize: 15,
        lineHeight: 20,
    },   
    modal: {
        backgroundColor: '#fff8dc',
        width: WIDTH-32,
        height: HEIGHT / 1.3,
        marginBottom: 16,
        borderRadius: 8,
        paddingVertical: 8,
    },
    item: {
        paddingHorizontal: 25,
        width: '100%',
        height: 48,
    }
})