"use client";
import Link from "next/link";
import { useState } from "react";
import { FaEllipsisV, FaUser } from "react-icons/fa";

const UserProfile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col group">
      <div className="flex items-center space-x-4 p-4 bg-gray-50 transition-all duration-300 group-hover:bg-gray-100 rounded-lg">
        <FaUser className="text-xl" />
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-800">Riley Carter</p>
          <p className="text-sm text-gray-500">riley@email.com</p>
        </div>
        <FaEllipsisV
          className="text-gray-500 cursor-pointer group"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div
        className={`transition-all duration-300 flex flex-col gap-y-3 ease-in-out ${
          open ? "visible opacity-100" : "invisible opacity-0"
        } border-[1px] mt-2 p-4`}
      >
        <Link
          href={"/"}
          className="block p-2 rounded-md border-[1px] font-poppins transition-all duration-300 text-gray-800 hover:text-white hover:bg-black"
        >
          Profile
        </Link>
        <Link
          href={"/"}
          className="block p-2 rounded-md border-[1px] font-poppins transition-all duration-300 text-gray-800 hover:text-white hover:bg-black"
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default UserProfile;
