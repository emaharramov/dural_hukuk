"use client";
import React from "react";
import { usePathname } from "next/navigation";

const JoinUs = () => {
  const path = usePathname();

  return (
    <div
      className="flex flex-col items-center justify-center"
      data-aos="fade-in"
      data-aos-easing="linear"
      data-aos-duration={600}
    >
      <h2 className="pt-12 w-full text-center pb-7 text-[32px] text-[#051133] font-poppins-bold">
        Ekibimize Katıl
      </h2>
      <div className="w-full flex flex-col items-center gap-y-3 justify-center">
        {/* Ad Soyad Input */}
        <div className="px-10 w-full rounded-[30px] border-2 border-[#e4e4e4] transition-all md:max-w-[730px] focus-within:border-[#052038]">
          <input
            type="text"
            placeholder="Ad Soyad"
            className="h-[60px] w-full ps-2 outline-none font-poppins focus:border-none"
          />
        </div>
        {/* Telefon Input */}
        <div className="px-10 w-full rounded-[30px] border-2 border-[#e4e4e4] transition-all md:max-w-[730px] focus-within:border-[#052038]">
          <input
            type="text"
            placeholder="Telefon"
            className="h-[60px] w-full ps-2 outline-none font-poppins focus:border-none"
          />
        </div>
        {/* E-Mail Input */}
        <div className="px-10 w-full rounded-[30px] border-2 border-[#e4e4e4] transition-all md:max-w-[730px] focus-within:border-[#052038]">
          <input
            type="email"
            placeholder="E-Mail"
            className="h-[60px] w-full ps-2 outline-none font-poppins focus:border-none"
          />
        </div>
        {path === "/sosyal-sorumluluk " ? (
          <div className="px-10 flex items-start justify-start h-[250px] w-full rounded-[30px] border-2 border-[#e4e4e4] transition-all md:max-w-[730px] focus-within:border-[#052038]">
            <textarea
              placeholder="Mesajınız"
              className="w-full h-full p-2 outline-none font-poppins resize-none focus:border-none"
            ></textarea>
          </div>
        ) : (
          ""
        )}
        {/* Gönder Butonu */}
        <button className="mt-5 px-10 py-3 rounded-full bg-gradient-to-r from-[#4b6cb7] to-[#182848] text-white font-poppins-semibold text-[16px] hover:opacity-90 transition-all">
          GÖNDER
        </button>
      </div>
    </div>
  );
};

export default JoinUs;
