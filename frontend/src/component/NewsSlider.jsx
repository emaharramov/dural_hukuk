import Link from "next/link";
import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

const articles = [
  {
    id: 1,
    image: "https://www.duralhukuk.com/Resimler/Kucuk/75722903012852024.jpg",
    title:
      "Yabancı Mahkemelerce Verilmiş Boşanma Kararının Türkiye’deki Geçerliliği",
    description:
      "Kural olarak mahkemelerin aile birliğinin korunması amacıyla yabancı uyruklu kişilere.",
  },
  {
    id: 2,
    image: "https://www.duralhukuk.com/Resimler/Kucuk/63450258972752024.jpg",
    title: "Aile İkamet İzni Nedir, Kimler Alabilir?",
    description:
      "Aile ikamet izni, aile birliğinin korunması amacıyla yabancı uyruklu kişilere Türk makamlarınca verilen ikamet iznidir.",
  },
  {
    id: 3,
    image: "https://www.duralhukuk.com/Resimler/Kucuk/75722903012852024.jpg",
    title:
      "Yabancı Mahkemelerce Verilmiş Boşanma Kararının Türkiye’deki Geçerliliği",
    description:
      "Kural olarak mahkemelerin aile birliğinin korunması amacıyla yabancı uyruklu kişilere.",
  },
];

const NewsSlider = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {articles?.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-between w-[90%] mx-auto md:max-w-sm rounded overflow-hidden  transition-all duration-300 hover:shadow-md bg-white"
        >
          <img
            className="w-full"
            src="https://www.duralhukuk.com/Resimler/Kucuk/63450258972752024.jpg"
            alt="Calisma Izni"
          />
          <div className="px-6 py-4">
            <Link
              href={`/blog/${item.id}/${item.title}`}
            >
              <div className="line-clamp-3 font-poppins-medium text-[24px] md:text-[28px] cursor-pointer leading-8 transition-all duration-300 hover:text-[#00419D] hover:underline mb-2">
                {item.title}
              </div>
            </Link>
            <p className="text-[#5c5c5c] line-clamp-3 text-[20px] text-base font-poppins">
              {item.description}
            </p>
          </div>
          <Link
            className="inline-flex flex-col relative group"
            href={`/blog/${item.id}/${item.title}`}
          >
            <div className="px-6 inline-flex items-center gap-x-2 pb-1">
              <p className="underline group-hover:no-underline">DEVAMINI OKU</p>
              <MdArrowRightAlt color="#3143dc" size={18} />
            </div>
            <div className="px-6 border h-1 group bg-[#00419D] absolute bottom-0 left-0 right-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NewsSlider;
