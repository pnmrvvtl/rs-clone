import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  NextOrObserver,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
} from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  QueryDocumentSnapshot,
  setDoc,
  writeBatch,
} from 'firebase/firestore';
import { useContext } from 'react';
import { UserContext } from '../context/user-context';
import { ResultMeal } from '../types/meals-api-types';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const firebaseApp = initializeApp(firebaseConfig);

console.log(firebaseApp);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

// List of providers, facebook, github etc.
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export type objectsToAdd = {
  title: string;
  value: string;
};

export const addCollectionAndDocument = async <T extends objectsToAdd>(
  collectionKey: string,
  objectsToAdd: T[],
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log('done');
};

export const getCollectionAndDocuments = async (userId: string): Promise<objectsToAdd[]> => {
  const collectionRef = collection(db, userId);
  const q = query(collectionRef);

  // await Promise.reject(new Error('New error OOPS')); // generate errors for testing
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data() as objectsToAdd);
};

export type additionalInformation = {
  // ? is optional
  displayName?: string;
};

export type userData = {
  createdAt: Date;
  displayName: string;
  email: string;
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {} as additionalInformation,
): Promise<void | QueryDocumentSnapshot<userData>> => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'user', userAuth.uid);

  const userSnapShop = await getDoc(userDocRef);

  if (!userSnapShop.exists()) {
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
      console.log('error creating the user', error);
    }
  }

  return userSnapShop as QueryDocumentSnapshot<userData>;
};

export const createUserAuthWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserAuthWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const SignOut = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unSubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unSubscribe();
        resolve(userAuth);
      },
      reject,
    );
  });
};

export async function setMealToFireStore() {
  const { mealsByParametersResponse, userId } = useContext(UserContext);

  try {
    const str = JSON.stringify(mealsByParametersResponse);
    const strArray = str.match(/.{1,500000}/g) as Array<string>;
    await addCollectionAndDocument(userId, [
      {
        title: `mealsarrlen`,
        value: strArray.length.toString(),
      },
    ]);
    for (let i = 0; i < strArray.length; i++) {
      await addCollectionAndDocument(userId, [
        {
          title: `meals${i}`,
          value: strArray[i],
        },
      ]);
    }
  } catch (e) {
    alert((e as Error).message);
  }
}

export async function getMealFromFireStore() {
  const { mealsByParametersResponse, userId } = useContext(UserContext);

  try {
    console.log('mealByParamerResponse = ', mealsByParametersResponse);
    const results = await getCollectionAndDocuments(userId);
    const len = +results.filter((el) => el.title === 'mealsarrlen')[0].value;
    let str = '';
    for (let i = 0; i < len; i++) {
      const part = results.filter((el) => el.title === `meals${i}`)[0].value;
      str += part;
    }
    console.log(str);
    const resultObject = JSON.parse(str) as ResultMeal[];
    console.log(resultObject);
  } catch (e) {
    alert((e as Error).message);
  }
}