import React from "react";
import {StyleSheet, Text} from "react-native";

const BoldText = ({children}) => {
    return(
        <Text style={styles.boldText}>
            {children}
        </Text>
    )
}

export default BoldText;

const styles = StyleSheet.create({
    boldText:{
        fontFamily: 'Inter_600SemiBold',
        color: '#2EC68F',
        fontSize: 15,
        lineHeight: 20,
        textAlign: 'center',
        alignContent: 'center',
    }
})
