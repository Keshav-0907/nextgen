"use client";
import { useSpring, animated } from "react-spring";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const menuAnimation = useSpring({
    top: mobileMenu ? 50 : -500,
    opacity: mobileMenu ? 1 : 0,
  });

  return (
    <div className="border-b-2 border-gray-200 h-14 flex flex-row justify-between md:px-10 px-5 items-center">
      <div className="font-bold text-2xl md:text-3x">Next-Gen</div>

      <div className="hidden md:flex justify-center items-center space-x-10">
        <Link href={"/"}>Home</Link>
        <Link href={"/cohort"}>Cohort</Link>
        <Link href={"/blogs"}>Blogs</Link>
        <Link href={"/about"}>About</Link>
      </div>

      <div
        className="border-[1px] flex p-1 border-gray-300 rounded-lg md:hidden"
        onClick={toggleMenu}
      >
        <IoIosMenu size={25} />
      </div>

      {mobileMenu ? (
        <animated.div
          style={menuAnimation}
          className="shadow-md bg-gray-100 absolute top-14 left-0 right-0 md:hidden"
        >
          <div className="flex flex-col items-center gap-3 py-5">
            <div>
              <Link href={"/"}>Home</Link>
            </div>
            <div>
              <Link href={"/cohort"}>Cohort</Link>
            </div>
            <div>
              <Link href={"/blogs"}>Blogs</Link>
            </div>
            <div>
              <Link href={"/about"}>About</Link>
            </div>
          </div>
        </animated.div>
      ) : null}
    </div>
  );
};

export default Navbar;
