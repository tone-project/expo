import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { observer } from 'mobx-react-lite'
import moment from 'moment'

import Heading from '../components/heading'
import Status from '../components/status'
import notificationsModel from '../store/notificationsModel'
import Notification from '../components/notification'

import NotificationsTest from '../test/notivicationsTest'
import metrix from '../../assets/metrix'

import Getnotifications from '../test/getNotifications'



const Notifications = observer(() => {
    return(
        <View style={styles.container}>
            <Status/>
            <View style={styles.notificationsBlock}>
                <Heading dark>Сповіщення</Heading>
                    <ScrollView style={styles.notificationsWrapper}>
                        {notificationsModel.notifications.map((notification, key) => {
                            return(
                                <Notification 
                                    key = {key}
                                    icon={notification.icon}
                                    description={notification.description}
                                    date={notification.date}
                                />
                            )
                        })
                        }
                    </ScrollView>
            </View>
            <Getnotifications/>
        </View>
    )
})

export default Notifications;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#1A1A1A',
        alignItems: 'center',
        // justifyContent: 'center',
        // padding: 16,
        paddingTop: 24,
        paddingHorizontal: 16,
        // backgroundColor: '#fff'
        maxWidth: 540,
        width: '100%',
        maxHeight: metrix.HEIGHT,
        alignSelf: 'center'
    },
    notificationsBlock: {
        marginTop: 15,
        flexShrink: 1,
        flexGrow: 1,
        alignItems: 'flex-start',
        width: '100%',
    },
    notificationsWrapper: {
        width: '100%',
        // height: 'auto',
        // flexGrow: 3,
    }
})