import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import firebaseConfig from './config'

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = () => firebase.auth();

export const dataBase = () => firebaseApp.firestore();
