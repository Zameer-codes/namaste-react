import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
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
import { setShowGptSearch } from "../redux/gptSearchSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);

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
    <div className="absolute z-50 w-screen bg-black md:bg-gradient-to-b from-slate-900 md:flex md:justify-between">
      <img
        className="md:w-60 md:h-24 md:ml-20 w-44 h-14 mx-auto"
        src={NETFLIX_LOGO_URL}
        alt={NETFLIX_ICON_ALT_TEXT}
      />
      {user && (
        <div className="flex p-4 items-center justify-between">
          <button
            className="bg-green-700 text-white p-2 px-4 rounded-lg mr-4"
            onClick={() => dispatch(setShowGptSearch())}
          >
            {showGptSearch ? "Go to Home" : "GPT Search"}
          </button>
          <div className="flex items-center">
            <p className="font-bold mr-4 text-white">{user.displayName}</p>
            <img
              src={user.photoURL}
              className="w-10 h-10 mr-4 hidden md:block"
              alt={PROFILE_ALT_TEXT}
            />
            <img
              src={LOGOUT_ICON_URL}
              className="w-8 h-8 bg-red-500 p-2 rounded-lg cursor-pointer"
              onClick={handleSignOut}
              alt={SIGN_OUT_ALT_TEXT}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
