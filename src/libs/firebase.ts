import {initializeApp} from  'firebase/app';
import {getStorage} from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyDpqbivTzR78wyzY_6prV8cZXnSiiSJR-E",
  authDomain: "baselist-80c71.firebaseapp.com",
  projectId: "baselist-80c71",
  storageBucket: "baselist-80c71.appspot.com",
  messagingSenderId: "153639361573",
  appId: "1:153639361573:web:a7e2f293a299d4e605f3cc",
  measurementId: "G-XR4R22HT0V"
  };

  const firebaseApp = initializeApp(firebaseConfig);
   export const storage = getStorage(firebaseApp )