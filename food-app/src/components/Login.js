import React from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <div className="w-screen h-screen bg-red-300/25 flex items-center justify-center">
        <div className="w-80 bg-stone-100 shadow-lg rounded-lg px-4 py-2 flex flex-col items-center top-0">
          <h1 className="flex justify-center mb-3">Let's get started</h1>
          <UserContext.Consumer>
            {(context) => (
              <div className="flex gap-2">
                <input
                  className="w-3/4 p-2 rounded-md"
                  onChange={(e) => {
                    context.setUsername(e.target.value);
                  }}
                  placeholder="user-name"
                />
                <Link
                  to="/"
                  className={`flex justify-center  w-24 p-2 rounded-md text-white  ${
                    context.username.trim() === ""
                      ? "bg-slate-300 cursor-not-allowed"
                      : "bg-slate-300 border hover:bg-slate-500"
                  }`}
                  onClick={(e) => {
                    if (context.username.trim() === "") {
                      e.preventDefault();
                    }
                  }}
                >
                  <button
                    className={`${
                      context.username.trim() === ""
                        ? "cursor-not-allowed"
                        : ""
                    }`}
                  >
                    Launch
                  </button>
                </Link>
              </div>
            )}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

export default Login;
