"use client";
import React from "react";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { GiNewspaper } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { usePathname } from "next/navigation";
import UserProfile from "../../src/component/UserProfile";

const navigationItems = [
  { href: "/dashboard", icon: <IoHome color="#333" />, label: "Ana Sayfa" },
  {
    href: "/dashboard/news",
    icon: <GiNewspaper color="#333" />,
    label: "Haberler",
  },
  {
    href: "/dashboard/users",
    icon: <FaUsers color="#333" />,
    label: "Kullanıcılar",
  },
];

const Sidebar = () => {
  const path = usePathname();

  return (
    <div className="sidebar border-[1px] border-[#E7EAED] w-[240px] p-2">
      <div className="p-3 border-[1px] border-[#E7EAED] font-poppins">Logo</div>
      <nav className="flex flex-col border-[1px] p-2 my-2">
        {navigationItems.map((item) => {
          const isActive = path === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              variant="text"
              className={`hover:bg-[#F5F5F5] font-poppins rounded-md active:bg-[#EEF4FC] px-4 gap-x-4 py-2 flex items-center ${
                isActive ? "bg-[#1976D214]" : "text-gray-800"
              }`}
            >
              {item.icon}
              <p>{item.label}</p>
            </Link>
          );
        })}
      </nav>
      <div className="border-l-[1px] border-t-[1px] border-r-[1px] p-2 my-2">
        <UserProfile />
      </div>
    </div>
  );
};

export default Sidebar;
