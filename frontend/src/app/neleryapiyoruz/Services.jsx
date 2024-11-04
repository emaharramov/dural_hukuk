import Link from "next/link";
import React from "react";
import { FaRegRegistered } from "react-icons/fa";
import { GrBasket } from "react-icons/gr";
import { IoBagSharp } from "react-icons/io5";

const services = [
  {
    id: 1,
    icon: <FaRegRegistered />, // This should be replaced with actual icons
    title: "Marka ve Patent Hukuku",
    description:
      "Marka Patent hukuku, markaların tescili, korunması, kullanımı, ihlali, taklit edilmesi gibi konuları düzenler.",
  },
  {
    id: 2,
    icon: <GrBasket />, // Replace with actual icon
    title: "E-Ticaret Hukuku",
    description:
      "Tüketicinin korunması ve pazar yerlerinde satış yapan küçük esnafın korunması amaçlanmıştır.",
  },
  {
    id: 3,
    icon: <IoBagSharp />, // Replace with actual icon
    title: "Şirketler Hukuku",
    description:
      "Marka Patent hukuku, markaların tescili, korunması, kullanımı, ihlali, taklit edilmesi gibi konuları düzenler.",
  },
];

const Services = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-5">
      {services.map((service) => (
        <div
          key={service.id}
          className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 p-5 w-full md:w-[350px] flex flex-col items-center justify-center"
        >
          <div className="text-[75px] text-blue-500">{service.icon}</div>
          <Link
            href={`/neleryapiyoruz/${service.id}/${encodeURIComponent(
              service.title
            )}`}
          >
            <h2 className="text-xl font-semibold my-[28px] transition-all duration-300 hover:underline">
              {service.title}
            </h2>
          </Link>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
