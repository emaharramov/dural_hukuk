import Image from "next/image";
import React from "react";
import Logo from "../../public/assets/dural-hukuk-logo.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  // Array of social media links and their corresponding icons
  const socialMediaLinks = [
    { href: "https://www.facebook.com", icon: FaFacebookF },
    { href: "https://www.instagram.com", icon: FaInstagram },
    { href: "https://www.linkedin.com", icon: FaLinkedinIn },
    { href: "https://www.youtube.com", icon: FaYoutube },
  ];

  return (
    <div
      className="bg-[#052038] py-[75px]"
      data-aos="fade-in"
      data-aos-delay={300}
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <Image src={Logo} alt="Logo" width={150} height={70} />
          <p className="py-6 text-center w-[90%] md:w-full leading-[46px] text-[20px] md:text-[23px] font-poppins text-white">
            WhatsApp kanalımıza ve SMS bültenimize <br />
            abone ol, hizmetlerimizden indirimlerle faydalan.
          </p>
          <div className="px-10 rounded-[30px] w-[90%] md:w-[540px] bg-[#0e3e69] flex items-center justify-between h-[60px]">
            <input
              type="text"
              placeholder="Telefon Numaranız"
              className="h-full bg-[#0e3e69] w-[90%] text-white outline-none"
            />
            <MdOutlineKeyboardArrowRight color="white" size={20} />
          </div>
          <a
            href="https://www.whatsapp.com/channel/0029VaEKGmDI1rco94Ka5n3q"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded px-8 py-3 mt-8 md:px-10 md:py-5 homebtn relative group"
          >
            <div className="flex items-center cursor-pointer transition-all duration-150">
              <div className="absolute rounded inset-0 w-0 group-hover:w-full h-full bg-gradient-to-l transition-all duration-150 ease-linear group-hover:right-0"></div>
              <p className="text-white relative w-full transition-all duration-150 z-10 group-hover:text-white">
                WhatsApp Kanalımıza Abone Ol
              </p>
            </div>
          </a>
        </div>
        <div className="mt-12 max-w-[1140px] px-2 md:px-0 mx-auto flex justify-around gap-y-10 md:gap-y-0 gap-x-10 flex-wrap">
          <div className="text-center">
            <h3 className="text-[24px] pb-6 text-white font-poppins-semibold">
              Bize Ulaşın
            </h3>
            <div className="flex items-center gap-x-3">
              <p className="text-[18px] text-[#7C899B] font-poppins-bold leading-7">
                Arabacıalanı Mah. No:54 I Blok D:2022 <br />
                Serdivan/Sakarya <br />
                info@duralhukuk.com <br />
                0850 532 17 45
              </p>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-[24px] pb-6 text-white font-poppins-semibold">
              Takip Et
            </h3>
            <div className="flex items-center gap-x-3">
              {socialMediaLinks.map((link,index) => (
                <a
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration={300 * index}
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-all duration-300"
                >
                  <div className="p-3 bg-[#0F3E69] rounded-3xl">
                    <link.icon
                      size={20}
                      className="text-white group-hover:text-[#7C899B] group-hover:rotate-360 transition-transform duration-300"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
