"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

const MobileNavbar = () => {
  const [show, setShow] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
    setShowSubMenu(false);
  };

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <nav className="lg:hidden flex items-center">
      {/* Menü İkonu */}
      <GiHamburgerMenu
        size={32}
        color="white"
        cursor="pointer"
        className="pr-2"
        onClick={toggleMenu}
      />

      {/* Menü Kapanma Alanı */}
      <div
        onClick={toggleMenu}
        className={`${
          show ? "absolute" : "hidden"
        } left-0 top-0 z-10 h-[100vh] w-full bg-black/30 backdrop-blur-sm`}
      ></div>

      {/* Mobil Menü */}
      <div
        className={`bg-slate-700 w-[70%] h-[100vh] transition-all duration-300 p-4 absolute z-20 top-0 ${
          show ? "left-0" : "-left-[100%]"
        }`}
      >
        <div className="flex justify-end p-2" onClick={toggleMenu}>
          <IoClose size={30} color="white" />
        </div>
        <div className="flex flex-col">
          {/* Neler Yapıyoruz Alt Menüsü */}
          <div>
            <div
              onClick={toggleSubMenu}
              className="p-2 flex items-center justify-between cursor-pointer border-l-[1px] text-white font-poppins-semibold"
            >
              <span>Neler Yapıyoruz?</span>
              <MdKeyboardArrowDown
                size={30}
                className={`transition-all duration-300 ${
                  showSubMenu ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`${
                showSubMenu
                  ? "max-h-[500px] opacity-100 visible"
                  : "max-h-0 opacity-0 invisible"
              } transition-all duration-300 ml-2 cursor-pointer overflow-hidden flex flex-col`}
            >
              <Link
                onClick={toggleMenu}
                href="/kurumsal?title=Neler Yapıyoruz?"
                className="text-white mt-1 border-l-[1px] hover:text-[#10AFEC] transition-all p-2"
              >
                Kurumsal Müvekkiller için Neler Yapıyoruz?
              </Link>
              <Link
                onClick={toggleMenu}
                href="/bireysel?title=Neler Yapıyoruz?"
                className="text-white mt-1 border-l-[1px] hover:text-[#10AFEC] transition-all p-2"
              >
                Bireysel Müvekkiller için Neler Yapıyoruz?
              </Link>
            </div>
          </div>

          {/* Diğer Menü Linkleri */}
          <Link
            onClick={toggleMenu}
            href="/ekibimiz?title=Ekibimiz"
            className="p-2 mt-1 cursor-pointer text-white font-poppins-semibold border-l-[1px]"
          >
            Ekibimiz
          </Link>
          <Link
            onClick={toggleMenu}
            href="/blog?title=Makaleler ve Haberler"
            className="p-2 mt-1 border-l-[1px] cursor-pointer text-white font-poppins-semibold"
          >
            Makaleler ve Haberler
          </Link>
          <Link
            onClick={toggleMenu}
            href="/sosyal-sorumluluk?title=Sosyal Sorumluluk"
            className="p-2 mt-1 border-l-[1px] cursor-pointer text-white font-poppins-semibold"
          >
            Sosyal Sorumluluk
          </Link>
          <Link
            onClick={toggleMenu}
            href="/iletisim?title=İletişim"
            className="p-2 mt-1 border-l-[1px] cursor-pointer text-white font-poppins-semibold"
          >
            İletişim
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
