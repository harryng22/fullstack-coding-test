import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";
import { seedDatabase } from '../seed';

const firebaseConfig = {
    apiKey: "AIzaSyDCI6LJFWVBtxq4BCl_hvDHKi__Q9gg3iY",
    authDomain: "fullstack-coding-test-29e57.firebaseapp.com",
    projectId: "fullstack-coding-test-29e57",
    storageBucket: "fullstack-coding-test-29e57.appspot.com",
    messagingSenderId: "503628718051",
    appId: "1:503628718051:web:286bd884f45c2362c28ad6"
};


export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth();

seedDatabase();