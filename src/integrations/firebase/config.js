import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1E0MlbubkDNIF4XbfLpiBqTq1iT4y-AU",
  authDomain: "tvm-database-d59e2.firebaseapp.com",
  projectId: "tvm-database-d59e2",
  storageBucket: "tvm-database-d59e2.firebasestorage.app",
  messagingSenderId: "911290806613",
  appId: "1:911290806613:web:dbabb19e1ed35cedd0ffdc",
  measurementId: "G-820R7843K3"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);