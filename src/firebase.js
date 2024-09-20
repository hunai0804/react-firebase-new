import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEo5_53k6cKnjtXXhnaNuSZRXm_3t7RuQ",
  authDomain: "fir-react-5dbad.firebaseapp.com",
  projectId: "fir-react-5dbad",
  storageBucket: "fir-react-5dbad.appspot.com",
  messagingSenderId: "67521968494",
  appId: "1:67521968494:web:dea63379611af6fbb3e97f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };