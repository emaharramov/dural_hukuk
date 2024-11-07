"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaEllipsisV, FaUser } from "react-icons/fa";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const UserProfile = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter(); // useRouter hook'ını doğrudan kullan

  // Logout fonksiyonu
  const handleLogout = () => {
    Cookies.remove("token"); // Cookie'den token'ı siler
    router.push("/"); // Ana sayfaya yönlendirir
  };

  useEffect(() => {
    if (!Cookies.get("token")) {
      router.replace("/login"); // Cookie yoksa login sayfasına yönlendir
    }
  }, [router]);

  return (
    <div className="flex flex-col group">
      <div className="flex items-center space-x-4 p-4 bg-gray-50 transition-all duration-300 group-hover:bg-gray-100 rounded-lg">
        <FaUser className="text-xl" />
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-800">Admin Name</p>
          <p className="text-sm text-gray-500">info@admin.com</p>
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
          href={"/profile"}
          className="block p-2 rounded-md border-[1px] font-poppins transition-all duration-300 text-gray-800 hover:text-white hover:bg-black"
        >
          Profile
        </Link>
        <button
          onClick={handleLogout}
          className="p-2 rounded-md border-[1px] font-poppins transition-all duration-300 text-gray-800 hover:text-white hover:bg-black"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
