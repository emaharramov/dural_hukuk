import React from "react";
import anadolu from "../../public/assets/anadolu-sigorta.png";
import zurich from "../../public/assets/zurich-sigorta.png";
import gulf from "../../public/assets/gulf-sigorta.png";
import Image from "next/image";

const Partners = () => {
  return (
    <div className="bg-[#F8F8F8]">
      <div className="container mx-auto py-20 flex flex-col items-center">
        <p className="text-center text-[32px] md:text-[50px] font-poppins-medium leading-[58px] mb-[50px] text-[#263238]">
          Partners
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Image
            src={anadolu}
            alt="anadolu"
            className="mix-blend-multiply w-[90%] md:w-[350px] border-[1px] border-black border-dotted rounded-lg transition-all duration-200 hover:-translate-y-2"
          />
          <Image
            src={zurich}
            alt="zurich"
            className="mix-blend-multiply w-[90%] md:w-[350px] border-[1px] border-black border-dotted rounded-lg transition-all duration-200 hover:-translate-y-2"
          />
          <Image
            src={gulf}
            alt="gulf"
            className="mix-blend-multiply w-[90%] md:w-[350px] border-[1px] border-black border-dotted rounded-lg transition-all duration-200 hover:-translate-y-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
