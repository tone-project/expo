import React from "react";
import {StyleSheet, View, Text, TouchableHighlight } from "react-native";

import Icons from "../icons";

const Option = ({onPressItem, item}) => {
    return(
        <TouchableHighlight  
            onPress={() => onPressItem(item)}
        >
            <View style={styles.option}>
                <View style={styles.icon}>
                    <Icons 
                        name={item.icon}
                        // dark
                    />
                </View>
                <Text style={styles.text}>{item.description}</Text>
            </View> 
        </TouchableHighlight>
    )
}

export default Option;

const styles=StyleSheet.create({
    option: {
        alignItems: 'center',
        width: 296,
        height: 48,
        flexDirection: 'row',
        paddingVertical: 14,
        paddingHorizontal: 25,
    },
    icon: {
        width: 32,
        height: 32,
        marginRight: 20,
    },
    text: {
      fontFamily: 'Inter_400Regular',
        color: '#000000',
        fontSize: 15,
        lineHeight: 20,
    }
})