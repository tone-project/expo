import React from "react";
import {StyleSheet, Text} from "react-native";

const Heading = ({children, dark}) => {
    return(
        <Text style={[styles.Heading, {color: dark ? '#222624' : '#F2F2F2',}]}>
            {children}
        </Text>
    )
}

export default Heading;

const styles = StyleSheet.create({
    Heading:{
        fontFamily: 'Inter_700Bold',
        fontSize: 26,
        lineHeight: 32,
        textAlign: 'center',
        alignContent: 'center',
    }
})