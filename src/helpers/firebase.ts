import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  NextOrObserver,
  User,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';
import firebase from 'firebase/compat';
import Error = firebase.auth.Error;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAYPGZR8Ioha16PJjFYbFy9zSUdki4KTTU',
  authDomain: 'rs-clone-d2f50.firebaseapp.com',
  projectId: 'rs-clone-d2f50',
  storageBucket: 'rs-clone-d2f50.appspot.com',
  messagingSenderId: '534595604216',
  appId: '1:534595604216:web:daf37cd8c79dc73551350d',
  measurementId: 'G-FSX4MB98GY',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = async () => await signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = async () => await signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocument = async (collectionKey: string, objectsToAdd: { title: string }[]) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object: { title: string }) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done!');
};

export const getCategoriesAndDocuments = async () => {
  // const collectionRef = collection(db, 'categories');
  // const q = query(collectionRef);
  //
  // const querySnapshot = await getDocs(q);
  // const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
  //   const { title, items } = docSnapshot.data() as { title: string; items: string[] };
  //   if (title && items) {
  //     acc = [...acc, [title, items]];
  //   }
  //   return acc;
  // }, []);
  //
  // return categoryMap;
};

export const createUserDocumentFromAuth = async (
  userAuth: { uid?: any; displayName?: any; email?: any },
  additionalInformation = {},
) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log(`error creating user: ${error.message}`);
      }
    }
  }

  return userDocRef;
};

export const createAuthWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => onAuthStateChanged(auth, callback);