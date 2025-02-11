import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="bg-gradient-to-b from-slate-900 flex justify-between">
      <img
        className="w-60 ml-20  "
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix icon"
      />
      {user && (
        <div className="flex p-4 items-center">
          <p className="font-bold mr-4">{user.displayName} </p>
          <img src={user.photoURL} className="w-10 h-10 mr-4" alt="Profile" />
          <img
            src="./logout.png"
            className="w-8 h-8 bg-red-500 p-2 rounded-lg cursor-pointer"
            onClick={handleSignOut}
            alt="Sign Out"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
