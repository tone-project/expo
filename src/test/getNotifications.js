import React, { useState, useRef, useEffect } from "react";
import {StyleSheet, View, Text, TouchableHighlight, TouchableOpacity, Modal} from "react-native";
import ModalPiker from '../components/modalPiker'
import DropDown from "../svg/icons/dropDown";
import notificationsStore from "../store/notificationsStore";
import Constants from 'expo-constants';
// import * as Notifications from 'expo-notifications';
// import * as Permissions from 'expo-notifications';


// Notifications.setNotificationHandler({
//     handleNotification: async () => ({
//       shouldShowAlert: true,
//       shouldPlaySound: true,
//       shouldSetBadge: false,
//     }),
//   });

  
//   const [selectedValue, setSelectedValue] = useState({icon: 'doorknock', description: 'Стукіт у двері'});
//   const [modalVisibility, changeModalVisibility] = useState(false)
//   const [delay, setDelay] = useState(1000)

//   const [expoPushToken, setExpoPushToken] = useState('');
//   const [notification, setNotification] = useState(false);
 

const Getnotifications = () => {

    // const [selectedValue, setSelectedValue] = useState({icon: 'doorknock', description: 'Стукіт у двері'});
    // const [modalVisibility, changeModalVisibility] = useState(false)
    // const [delay, setDelay] = useState(1000)

    // const [expoPushToken, setExpoPushToken] = useState('');
    // const [notification, setNotification] = useState(false);


    // const notificationListener = useRef();
    // const responseListener = useRef();
  
    //   const sendMesaage = (token) => {
    //     fetch('https://exp.host/--/api/v2/push/send', {
    //       method: 'POST',
    //       headers: {
    //         Accept: 'application/json',
    //         'Accept-encoding': 'gzip, deflate',
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         to: token,
    //         title: 'notification',
    //         body: 'notification',
    //         data: { data: 'goes here' },
    //         _displayInForeground: true,
    //       }),
    //     });
    //   }
  
    //   async function registerForPushNotificationsAsync() {
    //     let token;
    //     if (Constants.isDevice) {
    //       const { status: existingStatus } = await Notifications.getPermissionsAsync();
    //       let finalStatus = existingStatus;
    //       if (existingStatus !== 'granted') {
    //         const { status } = await Notifications.requestPermissionsAsync();
    //         finalStatus = status;
    //       }
    //       if (finalStatus !== 'granted') {
    //         alert('Failed to get push token for push notification!');
    //       }
    //       token = (await Notifications.getExpoPushTokenAsync()).data;
    //     } else {
    //       alert('Must use physical device for Push Notifications');
    //     }
      
    //     if (Platform.OS === 'android') {
    //       Notifications.setNotificationChannelAsync('default', {
    //         name: 'default',
    //         importance: Notifications.AndroidImportance.MAX,
    //         vibrationPattern: [0, 250, 250, 250],
    //         lightColor: '#FF231F7C',
    //       });
    //     }
    //     return token;
    //   }
        
    //   useEffect(() => {
    //     registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    //     notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
    //       setNotification(notification);
    //     });
    //     responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
    //       console.log(response);
    //     });
      
    //     return () => {
    //       Notifications.removeNotificationSubscription(notificationListener.current);
    //       Notifications.removeNotificationSubscription(responseListener.current);
    //     };
    //   }, []);

    useEffect(() => notificationsStore.getNotificationsInTenSec(), []) 

    return(
        <View style={styles.wrapper}>
            {/* <TouchableOpacity 
                style={styles.button}
                onPress={() => {
                    // notificationsStore.getNotifications();
                    // notificationsStore.clearNotificationsInTenSec();
                    // notificationsStore.getFirestoreNotifications();
                    // notificationsStore.getNotificationsInTenSec();
                    // notificationsStore.getNotifications();
                    // notificationsStore.setNotifications([
                    //     {
                    //         description: 'sad',
                    //         icon: 'sad',
                    //         date: 'sad',
                    //     },
                    //     {
                    //         description: 'sad',
                    //         icon: 'sad',
                    //         date: 'sad',
                    //     },
                    // ]);
                    // sendMesaage(expoPushToken);
                }
            }
            >
            <Text style={styles.buttonText}> get </Text>
        </TouchableOpacity> */}
        </View>
    )
}

export default Getnotifications;

const styles = StyleSheet.create({
    handleButton: {
        alignItems: 'center',
        borderColor:  '#2EC68F',
        borderWidth: 4,
        borderRadius: 23,
        marginTop: 3,
    },
    touchableHighlight: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#7A7D7C',
    },
    button: {
        height: 56,
        width: 128,
        borderColor:  '#2EC68F',
        borderWidth: 4,
        borderRadius: 23,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
})