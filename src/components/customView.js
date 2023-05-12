import React from "react";
import {StyleSheet, View} from "react-native";
import metrix from "../../assets/metrix";

const CustomView = ({children}) => {
    return(
        <View style={styles.adaptiveView}>
            {children}
        </View>
    )
}

export default CustomView;

const styles  = StyleSheet.create({
    adaptiveView:{
        width: '100%',
        maxWidth: metrix.MAX_WIDTH,
        padding: 16,
        alignItems: 'center',
    }
})