import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
  sendEmailVerification,
  signInAnonymously,
} from 'firebase/auth';
import { getFirestore, query, getDocs, collection, where, addDoc, setDoc, doc, getDoc } from 'firebase/firestore';
import { INVOICES } from './constants/firebaseConstants';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const signUserInAnonymously = async () => {
  try {
    const res = signInAnonymously(auth);
    return res;
  } catch(err) {
    throw handleFirebaseError(err);
  }
};

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, 'users'), where('uid', '==', user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      });
    }
  } catch (err) {
    throw handleFirebaseError(err);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const { user } = res;
    const newUser = getNewUser(user, user.displayName)
    return newUser;
  } catch (err) {
    throw handleFirebaseError(err);
  }
};

const registerWithEmailAndPassword = async (fullName, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user;

    await updateUserDisplayName(user, fullName)

    // console.log(`currentUser ==> ${JSON.stringify(auth.currentUser)}`)

    const newUser = getNewUser(user, fullName)

    const docRef = doc(db, 'users', user.uid);
    await setDoc(docRef, newUser, { merge: true });

    await sendEmailVerification(user);
    return newUser;
  } catch (err) {
    throw handleFirebaseError(err);
  }
};

const getNewUser = (user, fullName) => {
  return  {
    uid: user.uid,
    authProvider: 'local',
    name: fullName,
    profilePhoto: user.photoURL,
    email: user.email,
    token: user.stsTokenManager.accessToken,
    role: 'Admin',
  };
}

const updateUserDisplayName = async (user, fullName) => {
  updateProfile(user, { displayName: fullName, photoURL: null })
    .then(() => {
      return auth.currentUser;
    })
    .catch((error) => {
      throw error;
    });
};

const sendPasswordReset = async (email) => {
  try {
    return await sendPasswordResetEmail(auth, email);
  } catch (err) {
    throw handleFirebaseError(err);
  }
};

const logout = () => {
  signOut(auth);
};

const addInvoice = async (invoice) => {
  try {
    const invoiceRef = await addDoc(collection(db, INVOICES), {...invoice});
    console.log(`Invoice Ref ==> ${JSON.stringify(invoiceRef)}`)
  } catch (err) {
    throw handleFirebaseError(err);
  }
};

const fetchInvoices = async () => {
  try {
    const docSnap = await getDocs(collection(db, INVOICES));
    return docSnap.docs.map((doc) => ({...doc.data(), id:doc.id }));
  } catch (err) {
    throw handleFirebaseError(err);
  }
}

const fetchInvoiceById = async (invoiceId) => {
  try {
    const invoiceRef = doc(db, INVOICES, invoiceId);
    const docSnap = await getDoc(invoiceRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  } catch (err) {
    throw handleFirebaseError(err);
  }
};

function handleFirebaseError(error) {
  let errorMessage = '';
  console.error(`${error}`);
  if (error.code === 'auth/email-already-in-use') {
    errorMessage = 'Email address is already signed up';
  } else if (error.code === 'auth/invalid-email') {
    errorMessage = 'Email address is invalid';
  } else if (error.code === 'auth/weak-password') {
    errorMessage = 'Password is weak.  Password should be at least 6 characters';
  } else if (error.code === 'auth/user-not-found') {
    errorMessage = 'Provided email does not belong to a registered user';
  } else {
    errorMessage = error.code;
  }
  return errorMessage;
}

export {
  signUserInAnonymously,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  addInvoice,
  fetchInvoices,
  fetchInvoiceById
};
