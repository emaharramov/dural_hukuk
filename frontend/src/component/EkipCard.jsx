import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

const ekip = [
  {
    id: 1,

    name: "Av. Aslıhan ERBAY",
    imageUrl: "https://www.duralhukuk.com/Resimler/Buyuk/32146853211422024.jpg",
    linkedinUrl: "www.linkedin.com",
  },
  {
    id: 2,
    name: "Av. Orhan Sinan DURAL",
    imageUrl:
      "https://www.duralhukuk.com/Resimler/Buyuk/312893092727122023.jpg",
    linkedinUrl: "www.linkedin.com",
  },
  {
    id: 3,
    name: "Av. Nazlı AY",
    imageUrl: "https://www.duralhukuk.com/Resimler/Buyuk/av-nazli-ay.jpg",
    linkedinUrl: "www.linkedin.com",
  },
];

const EkipCard = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {ekip.map((ekip, i) => (
        <div
          data-aos="fade-up"
          data-aos-duration={400 * i}
          key={ekip.id}
          className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 w-full md:w-[350px] flex flex-col items-center justify-center"
        >
          <Image
            src={ekip.imageUrl}
            alt="ekip"
            width={350}
            height={408}
            className="rounded w-full"
          />
          <div className="py-4 flex flex-col items-center gap-2">
            <p className="cursor-default font-poppins-bold text-[24px] transition-all duration-300 hover:text-[#00419D]">
              {ekip.name}
            </p>
            <Link
              href={`https://${ekip.linkedinUrl}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin color="#00419D" size={22} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EkipCard;
