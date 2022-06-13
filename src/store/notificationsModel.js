import { extendObservable } from 'mobx'
import axios from 'axios';
// import moment from 'moment';

const URL = 'https://559a87e3-2a86-4dd9-8655-2a8885f289e3.mock.pstmn.io/dddd'

class NotificationsModel {
    constructor() {
        extendObservable(this, {
            notifications: [],
            NewNotification: (payload) => {
                console.log('notifications', this.notifications)
                this.notifications.push({
                    description: payload.description,
                    icon: payload.icon,
                    date: payload.date,
                })
            },
            clearNotifications: () => {
                this.notifications = []
            },
            clearNotificationsInTenSec: () => setTimeout(async() => {
                await this.clearNotifications();
            }, 10000),
            setNotifications: (payload) => {
                this.notifications.push(payload)
                console.log('notification: ', payload)
            },
            getNotifications: () => {
                fetch(URL)
                    .then(responce => {
                        console.log('responce: ', responce)
                        return responce.json()
                    })
                    .then(payload => console.log('payload: ', payload))
                    //.then(payload => this.setNotifications(payload))
                    //this.setNotifications({ description: "1" })
                    .catch(error => console.log(error))
            },
        });
    }
}

export default new NotificationsModel;