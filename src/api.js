import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyC2kfkmr_ayyuPdDmCOA2yGGO2gRv6wkgQ",
  authDomain: "tinylife-b095f.firebaseapp.com",
  projectId: "tinylife-b095f",
  storageBucket: "tinylife-b095f.appspot.com",
  messagingSenderId: "25716647849",
  appId: "1:25716647849:web:4e9266b336daadf37306b8",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const housesCollectionRef = collection(db, "houses");

export async function getHouses() {
  const snapshot = await getDocs(housesCollectionRef);
  const houses = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return houses;
}

export async function getHouse(id) {
  const docRef = doc(db, "houses", id);
  const snapshot = await getDoc(docRef);
  return {
    ...snapshot.data(),
    id: snapshot.id,
  };
}

export async function getHostHouses() {
  const q = query(housesCollectionRef, where("hostId", "==", 123));
  const snapshot = await getDocs(q);
  const houses = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return houses;
}

// export async function loginUser(creds) {
//   const res = await fetch("http://localhost:3001/users", {
//     method: "post",
//     body: JSON.stringify(creds),
//   });
//   const data = await res.json();

//   if (!res.ok) {
//     throw {
//       message: data.message,
//       statusText: res.statusText,
//       status: res.status,
//     };
//   }

//   return data;
// }
