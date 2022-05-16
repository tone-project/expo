// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
// import * as firebase from 
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// console.log('firebase',firebase.auth)

const firebaseConfig = {
    apiKey: "AIzaSyDermZzatUq97ws80JddQnPSZUOy5cjueQ",
    authDomain: "tome-ff27b.firebaseapp.com",
    projectId: "tome-ff27b",
    storageBucket: "tome-ff27b.appspot.com",
    messagingSenderId: "775937721584",
    appId: "1:775937721584:web:b89ff19eb30f9a2c666e35"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

export default firebase.auth()

// export default auth();