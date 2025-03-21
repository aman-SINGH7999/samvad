// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyDrWe7KYNOxKTDZB3156iDV1YETP4AEduk",
  authDomain: "original-fd69e.firebaseapp.com",
  projectId: "original-fd69e",
  storageBucket: "original-fd69e.firebasestorage.app",
  messagingSenderId: "1075624973449",
  appId: "1:1075624973449:web:7623ee65d8bfb80f5e6258",
  measurementId: "G-D8W8RBLFVX",
  databaseURL: "https://original-fd69e-default-rtdb.asia-southeast1.firebasedatabase.app/"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

// function for write the data in realtime database
function writeUserData(path, data) {
    set(ref(db, path), data);
  }

const getAllData = async (path="test/users")=>{
    let snapshot = await get(child(ref(db), path));
    if (snapshot.exists()) {
        console.log(snapshot.val());
        return {status:201,data : snapshot.val(), message : "data found"};
      } else {
        console.log("No data available");
        return {status:404,message : "No data", data:null};
      }
}



export { writeUserData, getAllData};