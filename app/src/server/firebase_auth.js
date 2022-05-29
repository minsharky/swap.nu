// This file handles everything related to connecting the SwapNU site and Firebase for database access and user authentication
import {initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyATewvmb2vuI5VMA4O91qIZKqfkyavqYMc",
    authDomain: "swapnu-eca62.firebaseapp.com",
    databaseURL: "https://swapnu-eca62-default-rtdb.firebaseio.com",
    projectId: "swapnu-eca62",
    storageBucket: "swapnu-eca62.appspot.com",
    messagingSenderId: "986800582411",
    appId: "1:986800582411:web:c692bbc6e9b335a947bc0e"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);