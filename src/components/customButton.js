import React from "react";
import {StyleSheet, Text,TouchableOpacity} from "react-native";

const CustomButton = ({style, value, onPress, transparent}) => {
    return(
        <TouchableOpacity 
            style={[styles.button, style, {backgroundColor: transparent ? 'transparent' : '#2EC68F'}]} 
            onPress={onPress} 
        >
            <Text style={[styles.buttonText,{color: transparent ? '#2EC68F': '#F2F2F2'}]}>
                {value}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton;

const styles = StyleSheet.create({
    button:{
        height: 56,
        // width: 328,
        width: '100%',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#2EC68F',
        justifyContent: 'center',
    },
    buttonText:{
        textAlign: 'center',
        fontFamily: 'Inter_600SemiBold',
        fontSize: 15,
        lineHeight: 20,
        textAlign: 'center',
    }
})