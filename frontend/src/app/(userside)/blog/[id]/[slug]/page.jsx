"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import PuffLoader from "react-spinners/PuffLoader";

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

const Page = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (id) {
      const articleId = parseInt(id);
      const foundArticle = articles.find((item) => item.id === articleId);
      setArticle(foundArticle || null);
    }
  }, [id]);

  if (!article)
    return (
      <div className="py-20 flex items-center justify-center">
        <PuffLoader color="#36D7B7" loading size={60} />
      </div>
    );

  return (
    <div className="container mx-auto flex justify-between w-full py-20">
      <div className="rounded-xl overflow-hidden w-[96%] mx-auto md:w-2/3 md:mr-[15px]">
        <div className="relative w-full h-[50vh] lg:h-[487px]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover rounded-xl"
            unoptimized
          />
        </div>
        <h2 className="text-[28px] md:text-[36px] md:leading-[44px] font-poppins-medium my-7">
          {article.title}
        </h2>
        <p>{article.description}</p>
      </div>

      <aside className="border rounded-md w-[350px] h-fit ms-[15px] hidden md:block px-9 pt-10 pb-4 bg-[#f9f9f9]">
        <p className="text-[22px] leading-8 border-b-2 border-[#f3f4f6] pb-5 mb-4 font-poppins-medium text-[#051133]">
          Tüm Yazılar
        </p>
        <div>
          {articles.map((item) => (
            <Link
              key={item.id}
              href={`/blog/${item.id}/${item.title}`}
              className="flex items-center justify-between gap-x-2 h-[80px] mb-4"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={95}
                height={80}
                className="h-full object-cover"
              />
              <p className="text-[#051133] font-poppins-semibold text-[14px] line-clamp-4 hover:text-[#00419D] transition-all duration-300 leading-5">
                {item.title}
              </p>
            </Link>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Page;
