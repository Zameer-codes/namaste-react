import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { currentUser, removeUser } from "../redux/userSlice";
import {
  NETFLIX_LOGO_URL,
  SIGN_OUT_ALT_TEXT,
  PROFILE_ALT_TEXT,
  LOGOUT_ICON_URL,
  BROWSE_ROUTE,
  HOME_ROUTE,
  NETFLIX_ICON_ALT_TEXT,
} from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, uid, displayName, photoURL } = user;
        dispatch(
          currentUser({
            email: email,
            uid: uid,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        navigate(BROWSE_ROUTE);
      } else {
        dispatch(removeUser());
        navigate(HOME_ROUTE);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute z-50 w-screen bg-gradient-to-b from-slate-900 flex justify-between">
      <img
        className="w-60 ml-20"
        src={NETFLIX_LOGO_URL}
        alt={NETFLIX_ICON_ALT_TEXT}
      />{" "}
      {/* Use the new constant */}
      {user && (
        <div className="flex p-4 items-center">
          <p className="font-bold mr-4">{user.displayName}</p>
          <img
            src={user.photoURL}
            className="w-10 h-10 mr-4"
            alt={PROFILE_ALT_TEXT}
          />
          <img
            src={LOGOUT_ICON_URL}
            className="w-8 h-8 bg-red-500 p-2 rounded-lg cursor-pointer"
            onClick={handleSignOut}
            alt={SIGN_OUT_ALT_TEXT}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
