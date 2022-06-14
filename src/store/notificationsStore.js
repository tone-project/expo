import {extendObservable} from 'mobx'
import {dataBase}  from '../components/firebase';
import { collection, doc, getDoc, addDoc ,getDocs, getFirestore } from "firebase/firestore"; 
// import moment from 'moment';

// const URL = 'https://559a87e3-2a86-4dd9-8655-2a8885f289e3.mock.pstmn.io/dddd';
const URL = 'http://34.116.238.165:5000/';
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY1NTIwMzU3NywianRpIjoiMjE5ODIyZjEtMGYyNy00MTg3LWEwMDktZDBmNDdhNzUyMzhmIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImJkZjI2Mzk5LTdkZDMtNGQ3OC1hNjI4LTliYzE2OWUwYmEzMiIsIm5iZiI6MTY1NTIwMzU3NywiZXhwIjoxNjU1MjA0NDc3fQ._JWIOkJ_sJa5LKKY3SuUg0SL2g3k8y4gl3TgUshZgtA'


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
            getNotificationsInTenSec: () => setInterval(async() => {
                console.log('getNotifications')
                await this.getNotifications();
            }, 5000),
            setNotifications: (payload) => {
                console.log('setNotifications', payload)
                payload.map(el => this.notifications.push(el))
                // this.notifications = [...this.notifications, payload]
            },
            getNotifications: () => {
                fetch(URL + 'get_notifications',{
                    headers: {'Authorization': 'Bearer ' + token}
                })
                    .then(responce => {
                        console.log('responce: ', responce);
                        return responce.json();
                    })
                    .then(payload => {
                        console.log('payload: ', payload);
                        return this.setNotifications(payload.message)
                    })
                    .catch(error => console.log('error: ', error))
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