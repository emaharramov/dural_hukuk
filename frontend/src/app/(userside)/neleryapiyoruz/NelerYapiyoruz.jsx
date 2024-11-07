import React from "react";
import Services from "./Services";

const NelerYapiyoruz = () => {
  return (
    <div
      className="py-20 container mx-auto"
      data-aos="fade-in"
      data-aos-delay={300}
    >
      <p className=" text-center text-[32px] md:text-[50px] font-poppins-medium leading-[58px] mb-[50px] text-[#263238]">
        Neler Yapıyoruz?
      </p>
      <Services />
    </div>
  );
};

export default NelerYapiyoruz;
