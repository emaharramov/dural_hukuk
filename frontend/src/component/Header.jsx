"use client";
import React, { useEffect, useState, useMemo } from "react";
import { FaPhoneVolume, FaEnvelopeOpen } from "react-icons/fa6";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaUser,
  FaYoutube,
} from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import Navbar from "./Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";

const socialMediaLinks = [
  { icon: FaFacebookSquare, link: "https://facebook.com" },
  { icon: FaInstagram, link: "https://instagram.com" },
  { icon: FaLinkedin, link: "https://linkedin.com" },
  { icon: FaYoutube, link: "https://youtube.com" },
];

const Header = () => {
  const path = usePathname();
  const [title, setTitle] = useState("Varsayılan Başlık");
  const [token, setToken] = useState(null);
  const bax = path.startsWith("/blog/");
  const neleryapiyoruz = path.startsWith("/neleryapiyoruz/")
  console.log(neleryapiyoruz);
  
  useEffect(() => {
    // Sadece istemci tarafında çalışacak kodlar
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setTitle(params.get("title") || "Varsayılan Başlık");
      setToken(Cookies.get("token"));
    }
  }, [path]);

  const combinedTitle = useMemo(
    () => getCombinedTitle(path, title),
    [path, title]
  );

  const bgImageClass = useMemo(() => getBackgroundImage(path), [path]);

  return (
    <div>
      {/* Contact Information */}
      <div className="container mx-auto hidden md:flex items-stretch justify-between">
        <ContactInfo />
        <SocialMediaLinks token={token} />
      </div>

      {/* Title Section */}
      <div
        className={`header ${
          path === "/"
            ? ""
            : "after:absolute after:inset-0 after:bg-[rgba(23,25,46,0.65)]"
        } ${bgImageClass} relative`}
      >
        <div className={`${path === "/" ? "" : "absolute w-full z-10"} h-full`}>
          <div className="container mx-auto">
            <Navbar />
          </div>
          <HeaderContent
            mainpage={path === "/"}
            combinedTitle={combinedTitle}
            bax={bax}
            neleryapiyoruz={neleryapiyoruz}
          />
        </div>
      </div>
    </div>
  );
};

// Contact Information Component
const ContactInfo = () => (
  <div className="flex items-stretch">
    <ContactItem
      icon={<FaPhoneVolume className="icons" color="#644bed" />}
      link="tel:+08505321745"
      text="08505321745"
    />
    <ContactItem
      icon={<FaEnvelopeOpen className="icons" color="#644bed" />}
      link="mailto:info@duralhukuk.com"
      text="info@duralhukuk.com"
    />
  </div>
);

const ContactItem = ({ icon, link, text }) => (
  <div
    className="flex items-center gap-x-3 p-4 border-r-[1px]"
   
  >
    {icon}
    <a href={link} className="text-[#131418] font-poppins hover:underline">
      {text}
    </a>
  </div>
);

// Social Media Links Component
const SocialMediaLinks = ({ token }) => (
  <div className="border-l-[1px] flex divide-x-[1px]" >
    {socialMediaLinks.map(({ icon: Icon, link }, index) => (
      <Link
        href={link}
        key={index}
        className="p-4 group hover:bg-gradient-to-l hover:from-[#0985f9] hover:via-[#2f5cf3] hover:to-[#4d40ea] hover:border-[#333]"
      >
        <Icon className="transition-all duration-150 z-10 group-hover:text-white" />
      </Link>
    ))}
    {token ? (
      <Link
        href={"/dashboard"}
        className="p-4 group hover:bg-gradient-to-l hover:from-[#0985f9] hover:via-[#2f5cf3] hover:to-[#4d40ea] hover:border-[#333]"
      >
        <MdAccountCircle className="transition-all duration-150 z-10 group-hover:text-white" />
      </Link>
    ) : (
      <Link
        href={"/login"}
        className="p-4 group hover:bg-gradient-to-l hover:from-[#0985f9] hover:via-[#2f5cf3] hover:to-[#4d40ea] hover:border-[#333]"
      >
        <FaUser className="transition-all duration-150 z-10 group-hover:text-white" />
      </Link>
    )}
  </div>
);

// Header Content Component
const HeaderContent = ({ mainpage, combinedTitle, bax, neleryapiyoruz }) => (
  <div className="h-[70%] text-white flex flex-col items-center justify-center">
    <h1
      className={`container mx-auto font-poppins-semibold text-center ${
        bax ? "text-[23px]" : ""
      } text-[26px] md:text-[32px] lg:text-[50px]`}
    >
      {bax
        ? combinedTitle.split("/")[1]
        : neleryapiyoruz
        ? combinedTitle.split("/")[2]
        : combinedTitle}
    </h1>
    <h2
      className={`font-poppins-semibold text-center text-[22px] ${
        mainpage ? "md:text-[36px]" : bax ? "text-[18px]" : ""
      } mb-7`}
    >
      {mainpage
        ? "Çözüm Ortağınız"
        : bax
        ? `Ana Sayfa - ${combinedTitle.split("/")[1]}`
        : neleryapiyoruz
        ? `Ana Sayfa - ${combinedTitle.split("/")[2]}`
        : `Ana Sayfa - ${combinedTitle}`}
    </h2>
    {mainpage && (
      <Link
        href="/ekibimiz"
        className="px-8 py-3 md:px-10 md:py-5 homebtn relative group"
      >
        <div className="flex items-center cursor-pointer transition-all duration-150">
          <div className="absolute rounded inset-0 w-0 group-hover:w-full h-full bg-gradient-to-l transition-all duration-150 ease-linear group-hover:right-0"></div>
          <p className="text-white relative w-full transition-all duration-150 z-10 group-hover:text-white">
            Ekibimizi Görün
          </p>
        </div>
      </Link>
    )}
  </div>
);

function getCombinedTitle(path, title) {
  const pathsToTitles = {
    "/": "Dural Hukuk",
    "/kurumsal": "Kurumsal Müvekkiller için Neler Yapıyoruz?",
    "/bireysel": "Bireysel Müvekkiller için Neler Yapıyoruz?",
    "/ekibimiz": "Ekibimiz",
    "/sosyal-sorumluluk": "Sosyal Sorumluluk",
    "/iletisim": "Iletişim",
    "/blog": title || "Blog",
  };

  return pathsToTitles[path] || decodeURIComponent(path.slice(8));
}

function getBackgroundImage(path) {
  const decodedPath = decodeURIComponent(path);

  if (decodedPath.startsWith("/blog")) {
    return "blogbanner h-[50vh] md:h-[350px]";
  }

  const backgroundClasses = {
    "/": "navbanner h-[50vh] md:h-[604px]",
    "/ekibimiz": "ekipbanner h-[50vh] md:h-[350px]",
    "/kurumsal": "kurumsalbanner h-[50vh] md:h-[350px]",
    "/bireysel/": "bireyselbanner h-[50vh] md:h-[350px]",
    "/nelerapiyoruz": "bg-contact h-[50vh] md:h-[350px]",
    "/iletisim": "iletisimbanner h-[50vh] md:h-[350px]",
    "/sosyal-sorumluluk": "sosyalbanner h-[50vh] md:h-[350px]",
  };

  return backgroundClasses[decodedPath] || "bg-default h-[50vh] md:h-[350px]";
}

export default Header;
