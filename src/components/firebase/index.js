import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import firebaseConfig from './config'

const firebaseApp = firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();

export const auth = () => firebase.auth();

export const dataBase = () => firebaseApp.firestore();

// const app = initializeApp(firebaseConfig);

// export const auth = () => getAuth(app)

// export const auth = getAuth( app );

// export default getAuth(app)

// export default auth();S