import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyA31vNA-Oe7OVLK7WJXgshCRZOtkd4wkJg',
  authDomain: 'menace-1c678.firebaseapp.com',
  databaseURL:
    'https://menace-1c678-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'menace-1c678',
  storageBucket: 'menace-1c678.appspot.com',
  messagingSenderId: '14962327630',
  appId: '1:14962327630:web:9875a93931bf11069f431f',
};

export const app = initializeApp(firebaseConfig);
