import Link from "next/link";
import React from "react";
import Navlinks from "./navlinks";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full shadow-sm z-40  backdrop-blur-xs">
      <div className="flex flex-wrap items-center max-w-screen-lg mx-auto p-4 justify-between ">
        <Link href="/" className="font-bold text-2xl">
          AK1NG.
        </Link>
        <Navlinks />
      </div>
    </nav>
  );
};

export default Navbar;
