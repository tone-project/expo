import React from "react";
import {StyleSheet, Text} from "react-native";

const CustomText = ({children}) => {
    return(
        <Text style={styles.text}>
            {children}
        </Text>
    )
}

export default CustomText;

const styles = StyleSheet.create({
    text:{
        fontFamily: 'Inter_400Regular',
        color: '#F2F2F2',
        fontSize: 15,
        lineHeight: 20,
        textAlign: 'center',
    }
})