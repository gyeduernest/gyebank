import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  
  apiKey: "AIzaSyAwCeymWSdy78L22Kzx_4nCJv2MyI9vJCQ",
  authDomain: "newbankproject-2b73e.firebaseapp.com",
  projectId: "newbankproject-2b73e",
  storageBucket: "newbankproject-2b73e.appspot.com",
  messagingSenderId: "621769738641",
  appId: "1:621769738641:web:996b68280e1c36f693b230"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);