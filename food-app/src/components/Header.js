import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { username, setUsername } = useContext(UserContext);

  return (
    <div className="flex justify-between mb-4 bg-slate-200 shadow-lg h-20">
      <div className="w-20 flex gap-4">
        <img src={LOGO_URL} />
        <p className="whitespace-nowrap flex items-center text-xl text-slate-800  px-4 bg-slate-100  rounded-md my-auto py-2">
          Hi, {username}
        </p>
      </div>
      <div>
        <ul className="flex h-[100%]">
          <li className="flex px-3 items-center h-[100%]">
            Online :{" "}
            <div
              className={`w-3 h-3 ${
                onlineStatus ? "bg-green-500" : "bg-red-500"
              } rounded-lg ml-1`}
            ></div>
          </li>
          <Link to="/">
            <li className="flex px-3 items-center h-[100%] hover:bg-slate-500">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="flex px-3 items-center h-[100%] hover:bg-slate-500">
              About
            </li>
          </Link>
          <Link to="/contact">
            <li className="flex px-3 items-center h-[100%] hover:bg-slate-500">
              Contact
            </li>
          </Link>
          <Link to="/cart">
            <li className="flex px-3 items-center h-[100%] hover:bg-slate-500">
              Cart
            </li>
          </Link>
          <Link
            to="/login"
            onClick={() => {
              setUsername("");
            }}
          >
            <li className="flex px-3 items-center h-[100%] shadow-md bg-slate-300 hover:bg-slate-500">
              Logout
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
