import firebase from 'firebase';
//import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDvjqexQEAGSuyaeHjX2X5YcZ9FOq7Ym9c',
  authDomain: 'p-58-4acf3.firebaseapp.com',
  projectId: 'p-58-4acf3',
  storageBucket: 'p-58-4acf3.appspot.com',
  messagingSenderId: '549906366314',
  appId: '1:549906366314:web:ecad23ce69e49b6de32f13',
  measurementId: 'G-ES8D1RDEQQ',
};

// Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
export default firebase.database();
