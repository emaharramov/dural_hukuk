"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaRegRegistered } from "react-icons/fa";
import { GrBasket } from "react-icons/gr";
import { IoBagSharp } from "react-icons/io5";

const services = [
  {
    id: 1,
    icon: <FaRegRegistered />,
    title: "Marka ve Patent Hukuku",
    description:
      "Marka Patent hukuku, markaların tescili, korunması, kullanımı, ihlali, taklit edilmesi gibi konuları düzenler.",
  },
  {
    id: 2,
    icon: <GrBasket />,
    title: "E-Ticaret Hukuku",
    description:
      "Tüketicinin korunması ve pazar yerlerinde satış yapan küçük esnafın korunması amaçlanmıştır.",
  },
  {
    id: 3,
    icon: <IoBagSharp />,
    title: "Şirketler Hukuku",
    description:
      "Marka Patent hukuku, markaların tescili, korunması, kullanımı, ihlali, taklit edilmesi gibi konuları düzenler.",
  },
];

const Page = () => {
  const { id, slug } = useParams();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
   const filtered = services.filter((item) => item.id === Number(id));
   setFilteredData(filtered);
  }, [id]);

  return (
    <div className="container mx-auto py-5">
      {id ? (
        filteredData.length > 0 ? (
          <div>
            {filteredData.map((item) => (
              <div key={item.id} className="p-4 border rounded-md">
                <div className="text-2xl">{item.icon}</div>
                <h2 className="text-xl font-bold mt-2">{item.title}</h2>
                <p className="mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-red-500">Veri bulunamadı.</p>
        )
      ) : (
        <p className="text-gray-500">ID mevcut değil.</p>
      )}
    </div>
  );
};

export default Page;
