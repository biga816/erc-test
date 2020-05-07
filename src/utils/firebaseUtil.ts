import { apps, initializeApp, firestore } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJkI3kT0sSqxeh2W9oFpFlvtlnJ_egEpg",
  authDomain: "erc-checker.firebaseapp.com",
  databaseURL: "https://erc-checker.firebaseio.com",
  projectId: "erc-checker",
  storageBucket: "erc-checker.appspot.com",
  messagingSenderId: "320091365764",
  appId: "1:320091365764:web:7ce652b1f3887ded1b7dd1",
  measurementId: "G-J24Z1V1R48"
};

if (!apps.length) {
  initializeApp(firebaseConfig);
}

export async function getFirestoreData(key: string) {
  const db = firestore();
  return await db.collection(key).get();
}