import {extendObservable} from 'mobx'
import {dataBase}  from '../components/firebase';
import { collection, doc, getDoc, addDoc ,getDocs, getFirestore } from "firebase/firestore"; 
// import moment from 'moment';

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
            getNotifications: () => {
                fetch(URL)
                    .then(responce => {
                        return responce.json()
                    })
                    .then(payload => this.setNotifications(payload))
                    .catch(error => console.log(error))
            },
            getFirestoreNotifications: async() => {
                const db = dataBase();
                // try {
                //     const docRef = await addDoc(collection(db, "notifications"), {
                //         description: "bird",
                //         icon: "bird",
                //         date: "14:16" 
                //     });
                //     console.log("Document written with ID: ", docRef.id);
                // } catch (e) {
                //     console.error("Error adding document: ", e);
                // }
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
                // console.log('asdasda: ', docSnap)
                // if (docSnap.exists()) {
                // console.log("Document data:", docSnap.data());
                // } else {
                // doc.data() will be undefined in this case
                // console.log("No such document!");
                
            }
        });
    }
}

export default new NotificationsModel;