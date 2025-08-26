import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { LuPhoneCall } from "react-icons/lu";
import { FaSignInAlt } from "react-icons/fa";

export default function TopNavbar() {
  return (
    <div className="bg-[#273c66]">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-1">
            <AiOutlineMail size={18} />
            <a
              href="mailto:support@rstheme.com"
              target="_blank"
              className="text-white hover:text-[#21a7d0] transition-all duration-300 cursor-pointer"
            >
              support@rstheme.com
            </a>
          </div>
          <div className="flex items-center gap-1">
            <LuPhoneCall size={18} />
            <a
              href="https://wa.me/880589-8745"
              target="_blank"
              className="text-white hover:text-[#21a7d0] transition-all duration-300 cursor-pointer"
            >
              (+088) 589-8745
            </a>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-5">
            <FaSignInAlt size={18} className="text-[#21a7d0]" />
            <div className="flex gap-1">
              <button className="text-white hover:text-[#21a7d0] transition-all duration-300 cursor-pointer">
                Login
              </button>
              <span>/</span>
              <button className="text-white hover:text-[#21a7d0] transition-all duration-300 cursor-pointer">
                Register
              </button>
            </div>
          </div>
          <button className="bg-[#21a7d0] hover:bg-[#2db4de] transition-all duration-300 py-4 px-8 cursor-pointer">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
