import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

export default function Header() {
  return (
    <div className="header containerbg-gray-700 height-[72px] px-[40px] py-[20px] flex items-center justify-between">
      <Link to="/">
        <div className="logo text-white text-2xl font-semibold">Movie App</div>
      </Link>

      <div className="user-image">
        <img className="w-[38px] h-[38px]" src={user} alt="user" />
      </div>
    </div>
  );
}
