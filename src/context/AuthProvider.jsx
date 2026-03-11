import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { AuthContext } from "./AuthContext";
import axios from "axios";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [dbUser, setDbUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //  Fetch user from DB 
  const fetchDbUser = async (email) => {
    if (!email || !auth.currentUser) return;

    try {
      const token = await auth.currentUser.getIdToken();

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/users/${email}`, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setDbUser(res.data);
    } catch (error) {
      console.warn("DB user not found yet");
      setDbUser(null);
    }
  };

  //  Refetch user wrapper (instant update)
  const refetchUser = async () => {
    if (!auth.currentUser?.email) return;
    await fetchDbUser(auth.currentUser.email);
  };

  //  Register
  const createUser = async (email, password) => {
    setLoading(true);
    const result = await createUserWithEmailAndPassword(auth, email, password);
    setLoading(false);
    return result;
  };

  //  Login
  const loginUser = async (email, password) => {
    setLoading(true);
    const result = await signInWithEmailAndPassword(auth, email, password);
    setLoading(false);
    return result;
  };

  //  Google Login
  const googleLogin = async () => {
    setLoading(true);
    const result = await signInWithPopup(auth, googleProvider);
    setLoading(false);
    return result;
  };

  //  Update Profile
  const updateUserProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  //  Logout
  const signOutUser = async () => {
    setLoading(true);
    await signOut(auth);
    setUser(null);
    setDbUser(null);
    setLoading(false);
  };

  //  Observer for auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser?.email) {
        await fetchDbUser(currentUser.email);
      } else {
        setDbUser(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Auth context value
  const authInfo = {
    user,
    dbUser,
    loading,
    createUser,
    loginUser,
    googleLogin,
    updateUserProfile,
    signOutUser,
    refetchUser, 
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
