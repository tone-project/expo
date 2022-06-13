import {extendObservable} from 'mobx'
import {auth}  from '../components/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

class UserState{
    constructor(){
        extendObservable(this,{
            auth: auth(),
            register: (email, password) => {
                return createUserWithEmailAndPassword(this.auth, email, password);
            },
            signIn: (email, password) => {
                return signInWithEmailAndPassword(this.auth, email, password)
            },
        });
    }
}

export default new UserState;