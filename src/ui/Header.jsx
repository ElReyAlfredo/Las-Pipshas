import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <div className="bg-gradient-to-br from-orange-100 to-orange-50">
      <header className="bg-gradient-to-r from-orange-400 to-orange-500 px-6 py-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="text-white text-2xl md:text-3xl font-bold tracking-wide"
          >
            LAS PIPSHAS
          </Link>

          <SearchOrder />
          <Username />
        </div>
      </header>
    </div>
  );
}

export default Header;
