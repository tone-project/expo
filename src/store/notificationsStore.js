import {extendObservable} from 'mobx'
import {dataBase}  from '../components/firebase';
import { collection, getDocs } from "firebase/firestore"; 

const URL = 'https://559a87e3-2a86-4dd9-8655-2a8885f289e3.mock.pstmn.io/dddd'

class NotificationsModel{
    constructor(){
        extendObservable(this,{
            notifications: [],
            newNotification: (payload) => {
                this.notifications.push({
                    description: payload.description,
                    icon: payload.icon,
                    date: payload.date,
                })
            },
            clearNotifications: () => {
                this.notifications = [];
            },
            clearNotificationsInTenSec: () => setTimeout(async() => {
                await this.clearNotifications();
            }, 10000),
            setNotifications: (payload) => {
                this.notifications.push(payload)
            },
            getNotifications: async () => {
                fetch(URL)
                    .then(responce => {
                        return responce.json()
                    })
                    .then(payload => this.setNotifications(payload))
                    .catch(error => console.log(error))
            },
            getFirestoreNotifications: async() => {
                const db = dataBase();
                try {
                const querySnapshot = await getDocs(collection(db, "notifications"));
                console.log("querySnapshot: ", querySnapshot)
                
                querySnapshot.forEach((doc) => {
                    console.log(`${doc.id} => ${doc.data()}`);
                    this.notifications.push(doc.data())
                });
                } catch (e) {
                console.error("Error adding document: ", e);
                }
            }
        });
    }
}

export default new NotificationsModel;