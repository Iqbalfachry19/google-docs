import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAW9W3m-OOR_VFwp4ohqik9xCSDPmFpp-w",
    authDomain: "docs-c4701.firebaseapp.com",
    projectId: "docs-c4701",
    storageBucket: "docs-c4701.appspot.com",
    messagingSenderId: "195160316649",
    appId: "1:195160316649:web:b9a57d903377117d622e78"
  };
  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
  const db = app.firestore()
  export {db}