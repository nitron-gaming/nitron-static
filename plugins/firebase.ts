import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDqp4agIU9onsAQNTt_f0wOHZXsgR1gA2g",
  authDomain: "nitron-website.firebaseapp.com",
  projectId: "nitron-website",
  storageBucket: "nitron-website.appspot.com",
  messagingSenderId: "554340564132",
  appId: "1:554340564132:web:a789a824f18d84a3fd3a31",
  measurementId: "G-7B3BK11DBQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
