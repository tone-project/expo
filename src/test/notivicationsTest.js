import React, { useState, useRef, useEffect } from "react";
import {StyleSheet, View, Text, TouchableHighlight, TouchableOpacity, Modal} from "react-native";
import ModalPiker from '../components/modalPiker'
import DropDown from "../svg/icons/dropDown";

import notificationsModel from '../store/notificationsStore';
import moment from 'moment';


const NotificationsTest = () => {

    const [selectedValue, setSelectedValue] = useState({icon: 'doorknock', description: 'Стукіт у двері'});
    const [modalVisibility, changeModalVisibility] = useState(false)
    const [delay, setDelay] = useState(1000)

    // const [expoPushToken, setExpoPushToken] = useState('');
    // const [notification, setNotification] = useState(false);
    // const notificationListener = useRef();
    // const responseListener = useRef();



    Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true,
          shouldPlaySound: false,
          shouldSetBadge: false,
        }),
      });

      // const sendMesaage = (token) => {
      //   fetch('https://exp.host/--/api/v2/push/send', {
      //     method: 'POST',
      //     headers: {
      //       Accept: 'application/json',
      //       'Accept-encoding': 'gzip, deflate',
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({
      //       to: token,
      //       title: 'betomoedano',
      //       body: 'suscribete para mas contenido como este',
      //       data: { data: 'goes here' },
      //       _displayInForeground: true,
      //     }),
      //   });
      // }

      // async function registerForPushNotificationsAsync() {
      //   let token;
      //   if (Constants.isDevice) {
      //     const { status: existingStatus } = await Notifications.getPermissionsAsync();
      //     let finalStatus = existingStatus;
      //     if (existingStatus !== 'granted') {
      //       const { status } = await Notifications.requestPermissionsAsync();
      //       finalStatus = status;
      //     }
      //     if (finalStatus !== 'granted') {
      //       alert('Failed to get push token for push notification!');
      //       return;
      //     }
      //     token = (await Notifications.getExpoPushTokenAsync()).data;
      //     console.log(token);
      //   } else {
      //     alert('Must use physical device for Push Notifications');
      //   }
      
      //   if (Platform.OS === 'android') {
      //     Notifications.setNotificationChannelAsync('default', {
      //       name: 'default',
      //       importance: Notifications.AndroidImportance.MAX,
      //       vibrationPattern: [0, 250, 250, 250],
      //       lightColor: '#FF231F7C',
      //     });
      //   }
      //   return token;
      // }
        
      // useEffect(() => {
      //   registerForPushNotificationsA  sync().then(token => setExpoPushToken(token));
      //   notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      //     setNotification(notification);
      //   });
      //   responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      //     console.log(response);
      //   });
      
      //   return () => {
      //     Notifications.removeNotificationSubscription(notificationListener.current);
      //     Notifications.removeNotificationSubscription(responseListener.current);
      //   };
      // }, []);


    const handleButton =  () => {
        setTimeout( async() =>
        { 
            notificationsModel.NewNotification({
                description: selectedValue.description,
                icon: selectedValue.icon,
                date: moment().format('HH:ss'),
            })
            // sendMesaage(expoPushToken)
            // await Notifications.setNotificationChannelAsync('new-emails', {
            //     name: 'E-mail notifications',
            // })
        }
        , delay)
    }

    return(
        <View style={styles.wrapper}>
            <View style={styles.modal}>
                <TouchableHighlight 
                    style={styles.touchableHighlight}
                    underlayColor="#313533"
                    onPress={() => changeModalVisibility(true)}
                >
                    <View style={styles.modalPiker}>
                        {/* <View style={styles.option}> */}
                            {/* {selectedValue.icon && <View style={styles.icon}><Icons name={selectedValue.icon}/></View>} */}
                            <Text style={styles.modalPikerText}>{selectedValue.description}</Text>
                        {/* </View> */}
                            <DropDown/>
                    </View>
                </TouchableHighlight>
                <Modal
                    transparent={true}
                    animationType='fade'
                    visible={modalVisibility}
                    nRequestClose={()=> changeModalVisibility(false)}
                >
                    <ModalPiker 
                        changeModalVisibility={changeModalVisibility}
                        setSelectedValue={setSelectedValue}
                    />
                </Modal>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity 
                        style={styles.button}
                        onPress={() => setDelay(5000)}
                >
                    <Text  style={styles.buttonText}> 5000 </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                        style={styles.button}
                        onPress={() => setDelay(2000)}
                >
                    <Text style={styles.buttonText}> 2000 </Text>
                </TouchableOpacity>
                <Text style={styles.buttonText}> {delay} </Text>
                <TouchableOpacity 
                        style={styles.button}
                        onPress={() => setDelay(1000)}
                >
                    <Text style={styles.buttonText}> 1000 </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                        style={styles.button}
                        onPress={() => setDelay(500)}
                >
                    <Text style={styles.buttonText}> 500 </Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
            style={styles.handleButton}
            onPress={handleButton}
            >
                <Text style={styles.buttonText}> add new </Text>
            </TouchableOpacity>
        </View>
    )
}

export default NotificationsTest;

const styles = StyleSheet.create({
    wrapper: {
        // flexDirectio: 'row',
        backgroundColor: '#757575',
        width:  '100%',
        maxWidth: 640,
        height: 95,
        paddingHorizontal: 4,
    },
    modal: {
        marginTop: 2,
    },
    label: {
        fontFamily: 'Inter_400Regular',
        color: '#7A7D7C',
        fontSize: 12,
        lineHeight: 16,
        alignItems: 'flex-start',
        marginBottom: 4,
        marginLeft: 12,
    },
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
    modalPiker: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        height: 28,
        paddingHorizontal: 18,
        paddingVertical: 14, 
        lineHeight: 20,
        borderColor: '#7A7D7C',
    },
    option: {
        alignItems: 'center',
        flexDirection: 'row',  
        flexDirection: 'row',
    },
    icon: {
        width: 32,
        height: 32,
        marginRight: 9,
    },
    modalPikerText: {
        fontFamily: 'Inter_400Regular',
        color: '#F2F2F2',
        fontSize: 15,
    },
    buttons: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 3,
    },
    button: {
        height: 28,
        width: 56,
        borderColor:  '#2EC68F',
        borderWidth: 4,
        borderRadius: 23,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'Inter_600SemiBold',
        color: '#fff'
    }
})