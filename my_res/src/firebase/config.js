// import firebase from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// https://stackoverflow.com/questions/68929593/vue-2-export-default-imported-as-firebase-was-not-found-in-firebase-app

const firebaseConfig = {
  apiKey: "AIzaSyAMyG06qxe-2Jea9keRpLLUmWAcxFom1g4",
  authDomain: "software-technology-bku-2021.firebaseapp.com",
  projectId: "software-technology-bku-2021",
  storageBucket: "software-technology-bku-2021.appspot.com",
  messagingSenderId: "133933211968",
  appId: "1:133933211968:web:e250ce6bacaa9557f31aa5",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timeStamp };
