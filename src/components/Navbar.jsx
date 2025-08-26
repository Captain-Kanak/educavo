import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { GiShoppingBag } from "react-icons/gi";
import { IoIosMenu } from "react-icons/io";
import { PiGridNineFill } from "react-icons/pi";

export default function Navbar() {
  const links = (
    <>
      <li className="uppercase">
        <Link href={"/"}>home</Link>
      </li>
      <li className="uppercase">
        <Link href={"/"}>about</Link>
      </li>
      <li className="uppercase">
        <Link href={"/"}>courses</Link>
      </li>
      <li className="uppercase">
        <Link href={"/"}>pages</Link>
      </li>
      <li className="uppercase">
        <Link href={"/"}>blogs</Link>
      </li>
      <li className="uppercase">
        <Link href={"/"}>contact</Link>
      </li>
    </>
  );

  return (
    <nav className="bg-[#273c66] py-6">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 flex items-center justify-between">
        <div>
          <Logo />
        </div>

        <div className="flex items-center gap-2 hover:text-[#21a7d0] transition-all duration-300 cursor-pointer">
          <PiGridNineFill size={20} />
          <p className="uppercase">Categories</p>
        </div>

        <ul className="flex items-center gap-6">{links}</ul>

        <div className="flex items-center gap-4">
          <CiSearch size={20} />
          <span>|</span>
          <GiShoppingBag size={20} />
          <IoIosMenu size={28} />
        </div>
      </div>
    </nav>
  );
}
