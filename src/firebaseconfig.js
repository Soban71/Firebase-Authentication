import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDg7IoX-Zpqw1m6B9awKEeLhry-pZvCOQQ",
  authDomain: "interneeauthentication.firebaseapp.com",
  projectId: "interneeauthentication",
  storageBucket: "interneeauthentication.appspot.com",
  messagingSenderId: "400346952412",
  appId: "1:400346952412:web:82b531abfacf475766ba19",
  measurementId: "G-SW5C4NK37R"
};

const app = initializeApp(firebaseConfig);
export default app;
