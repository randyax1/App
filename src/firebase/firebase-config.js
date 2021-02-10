import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export const firebaseConfig = {
    apiKey: "AIzaSyBuVCDsU_Z2GW5_VEPeWLXPJVxtz7gu84A",
    authDomain: "react-con-firestone.firebaseapp.com",
    databaseURL: "https://react-con-firestone.firebaseio.com",
    projectId: "react-con-firestone",
    storageBucket: "react-con-firestone.appspot.com",
    messagingSenderId: "262018701133",
    appId: "1:262018701133:web:a5107f164a22b8e95d0904"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export{
      db,
      googleAuthProvider,
      firebase
  }