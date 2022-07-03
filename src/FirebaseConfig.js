// import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const config = {
  //   apiKey: process.env.REACT_APP_API_KEY,
  apiKey: 'AIzaSyB8hqiMW--LU82xLILus_amLWqMeAeiwpY',
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const firebaseApp = initializeApp(config);
const auth = getAuth(firebaseApp);

const firebaseConfig = {
  auth,
};

export default firebaseConfig;
