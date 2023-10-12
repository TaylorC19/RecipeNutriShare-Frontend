import { createContext, useContext, useState, useEffect, ReactNode } from "react";
// import axios from "axios";
import auth from '../../firebase/firebase'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  User,
  EmailAuthProvider,
  deleteUser,
  reauthenticateWithCredential
} from "firebase/auth";
import axios from "axios";

import { User as firebaseAuthUser } from "firebase/auth";

interface AuthContextProps {
  createUser: (email: string, password: string) => Promise<any>;
  loginUser: (email: string, password: string) => Promise<any>;
  logOut: () => Promise<any>;
  user: firebaseAuthUser | null;
  resetPasswordEmail: (email: string) => Promise<any>;
  userDeletion: () => Promise<any>;
}

const UserContext = createContext<AuthContextProps | null>(null);

// export const AuthContextProvider = ({ children }) => {
  export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
    children,
  }) => {
    const [user, setUser] = useState<firebaseAuthUser | null>(null);

    useEffect(() => {
      const authenticatedUser = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser || null);
      });
      return authenticatedUser;
    }, []);

    const createUser = async (email: string, password: string) => {
      const newUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      return newUser;
    };

    const loginUser = async (email: string, password: string) => {
      const userCred = await signInWithEmailAndPassword(auth, email, password);

      return userCred;
    };

    const logOut = () => {
      return signOut(auth);
    };

    const resetPasswordEmail = async (email: string) => {
      return sendPasswordResetEmail(auth, email);
    };

    const userDeletion = async () => {
      const currentAuth = auth;
      const userDelete: User | null = currentAuth.currentUser;

      if (!userDelete || !userDelete.email) {
        // There is no authenticated user, handle this case accordingly
        return console.log("How did you hit this endpoint");
      }

      try {
        const userPassword: string | null = prompt(
          "Please enter your password to delete your account:"
        );
        if (userPassword) {
          const credential = EmailAuthProvider.credential(
            userDelete.email,
            userPassword
          );

          await reauthenticateWithCredential(
            userDelete,
            credential
          );

          const currentUid = userDelete.uid;
          const payload = {
            uid: currentUid,
          };
          const config = {
            method: "DELETE",
            data: payload,
          };

          await axios.delete("/api/delete-user", config);
          await deleteUser(userDelete);
          setUser(null);
        } else {
          alert("You must enter your password to delete your account.");
        }
      } catch (error) {
        // An error occurred
        console.error(error);
      }
    };

    return (
      <UserContext.Provider
        value={{
          createUser,
          loginUser,
          logOut,
          user,
          resetPasswordEmail,
          userDeletion,
        }}
      >
        {children}
      </UserContext.Provider>
    );
  };

export const UserAuth = (): AuthContextProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("UserAuth must be used within an AuthContextProvider");
  }
  return context;
};