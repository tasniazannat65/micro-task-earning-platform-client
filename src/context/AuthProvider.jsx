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

  // 🔹 Fetch user from DB (SAFE)
  const fetchDbUser = async (email) => {
    if (!email || !auth.currentUser) return;

    try {
      const token = await auth.currentUser.getIdToken();

      const res = await axios.get(
        `http://localhost:3000/users/${email}`,
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

  // 🔹 Register
  const createUser = async (email, password) => {
    setLoading(true);
    const result = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    setLoading(false);
    return result;
  };

  // 🔹 Login
  const loginUser = async (email, password) => {
    setLoading(true);
    const result = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    setLoading(false);
    return result;
  };

  // 🔹 Google Login
  const googleLogin = async () => {
    setLoading(true);
    const result = await signInWithPopup(auth, googleProvider);
    setLoading(false);
    return result;
  };

  // 🔹 Update Profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // 🔹 Logout
  const signOutUser = async () => {
    setLoading(true);
    await signOut(auth);
    setUser(null);
    setDbUser(null);
    setLoading(false);
  };

  // 🔹 Observer
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

  const authInfo = {
    user,
    dbUser,
    loading,
    createUser,
    loginUser,
    googleLogin,
    updateUserProfile,
    signOutUser,
    refetchUser: fetchDbUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
