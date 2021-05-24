import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDaq59QpYiaZWzSbdGBlBpamBgbuesHTCA",
    authDomain: "netflix-clone-9ae72.firebaseapp.com",
    projectId: "netflix-clone-9ae72",
    storageBucket: "netflix-clone-9ae72.appspot.com",
    messagingSenderId: "795840668028",
    appId: "1:795840668028:web:95f24ead04358fa76704f9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;