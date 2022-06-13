import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Icons from "../icons";

const Notification = ({icon, description, date}) => {
    return(
        <View style={styles.notification}>
            <View style={styles.icon}>
                <Icons 
                    name={icon}
                />
            </View>
            <View style={styles.info}>
                <View>
                    <Text style={styles.description}>
                        {description}
                    </Text>
                </View>
                <View style={styles.dateWrapper}>
                    <Text style={styles.date}>
                        {date}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Notification;

const styles = StyleSheet.create({
    notification: {
        width: '100%',
        flexDirection: 'row',
        paddingTop: 14,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        borderRadius: 1,
    },
    icon: {
        marginRight: 13,
    },
    description: {
        fontFamily: 'Inter_500Medium',
        fontSize: 22,
        color: '#222624',
    },
    dateWrapper: {
        marginTop: 10,
    },
    date: {
        // Inter_700Bold
        fontFamily: 'Inter_700Bold',
        fontSize: 12,
        color: '#C7C7C7',
    }
})