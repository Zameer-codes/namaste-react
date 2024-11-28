import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState){
    console.log("componentDidUpdate");
  }

  componentWillUnmount(){
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <div className="w-screen h-screen bg-red-300/25 flex items-center justify-center">
        <div className="w-80 bg-stone-100 shadow-lg rounded-lg px-4 py-2 flex flex-col items-center top-0">
          <h1 className="flex justify-center mb-3">Let's get started</h1>
          <Link to="/" className="flex justify-center bg-slate-300 border w-32 p-2 rounded-md text-white hover:bg-slate-500">
            <button>Launch</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
