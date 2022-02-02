import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

export default function Header() {
  return (
    <div className="header bg-gray-700 height-[72px] px-[0px] py-[40px] flex items-center justify-around">
      <Link to="/">
        <div className="logo text-white text-2xl font-semibold">Movie App</div>
      </Link>

      <div className="user-image">
        <img className="w-[38px] h-[38px]" src={user} alt="user" />
      </div>
    </div>
  );
}
