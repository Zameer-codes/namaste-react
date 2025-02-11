import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateLoginForm } from "../utils/utils";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../redux/userSlice";

const Login = () => {
  const [isSignInPage, setIsSignInPage] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLoginValidation = (e) => {
    e.preventDefault();
    const message = validateLoginForm(
      email?.current?.value,
      password?.current?.value
    );
    setErrorMessage(message);

    if (message) return;

    if (isSignInPage) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(auth.currentUser, {
            displayName: "Zameer",
            photoURL: "https://avatars.githubusercontent.com/u/85661879?v=4",
          })
            .then(() => {
              const { email, uid, displayName, photoURL } = auth.currentUser;
              dispatch(
                currentUser({
                  email: email,
                  uid: uid,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  if (user) navigate("/browse");

  return (
    <div className="w-screen h-screen object-cover bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_small.jpg)]">
      <div className="w-screen h-screen bg-zinc-800 bg-opacity-40 relative">
        <Header />
        <div className="w-96 bg-black bg-opacity-80 p-8 mt-30 z-40 m-auto rounded-lg mt-20 text-white">
          <h2 className="text-2xl mb-4 text-center font-bold">
            {isSignInPage ? "Sign In" : "Sign Up"}
          </h2>
          <form onSubmit={handleLoginValidation}>
            {!isSignInPage && (
              <input
                className="w-full h-14 bg-gray-800 mb-5 p-4"
                placeholder="Enter User Name"
                type="text"
              />
            )}
            <input
              ref={email}
              className="w-full h-14 bg-gray-800 mb-5 p-4"
              placeholder="Enter Email"
              type="email"
            />
            <input
              ref={password}
              className="w-full h-14 bg-gray-800 mb-5 p-4"
              placeholder="Enter Password"
              type="password"
            />
            <p className="text-red-600 pb-4">{errorMessage}</p>
            <button className="bg-red-600 rounded-lg  p-4 w-full" type="submit">
              {isSignInPage ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <p
            className=" cursor-pointer my-6 text-center"
            onClick={() => setIsSignInPage((prev) => !prev)}
          >
            {isSignInPage
              ? "New to Netflix? Sign Up Here"
              : "Already registered? Sign In Here"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
