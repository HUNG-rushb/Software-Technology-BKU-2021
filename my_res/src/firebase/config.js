import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAI1WERiMbynDZ_EyLBh34TdLH1niw5vNo",
  authDomain: "project-software-technoloy.firebaseapp.com",
  databaseURL:
    "https://project-software-technoloy-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-software-technoloy",
  storageBucket: "project-software-technoloy.appspot.com",
  messagingSenderId: "205451832905",
  appId: "1:205451832905:web:ee8698de424dee7d6bd998",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectFirestore };
