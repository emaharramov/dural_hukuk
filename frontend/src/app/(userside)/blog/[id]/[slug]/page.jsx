"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PuffLoader from "react-spinners/PuffLoader";

const Page = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchArticle = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3000/api/posts/${id}`
          );
          setArticle(response.data);
        } catch (error) {
          console.error("Error fetching article:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchArticle();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="py-20 flex items-center justify-center">
        <PuffLoader color="#36D7B7" loading size={60} />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="py-20 flex items-center justify-center">
        <p>Article not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto flex justify-between w-full py-20">
      <div className="rounded-xl overflow-hidden w-[96%] mx-auto md:w-2/3 md:mr-[15px]">
        <div className="relative w-full h-[50vh] lg:h-[487px]">
          <Image
            src={article.image || "https://via.placeholder.com/600"}
            alt={article.title}
            fill
            className="object-cover rounded-xl"
            unoptimized
          />
        </div>
        <h2 className="text-[28px] md:text-[36px] md:leading-[44px] font-poppins-medium my-7">
          {article.title}
        </h2>
        {/* HTML içeriği tehlikeli bir şekilde render etmek için */}
        <div
          dangerouslySetInnerHTML={{ __html: article.content }}
          className="prose max-w-none" // Tailwind ile styling örneği
        ></div>
      </div>

      <aside className="border rounded-md w-[350px] h-fit ms-[15px] hidden md:block px-9 pt-10 pb-4 bg-[#f9f9f9]">
        <p className="text-[22px] leading-8 border-b-2 border-[#f3f4f6] pb-5 mb-4 font-poppins-medium text-[#051133]">
          Tüm Yazılar
        </p>
        <div>
          {/* API'den aldığınız tüm makaleleri burada listelemek için benzer bir `axios` isteği yapabilirsiniz */}
        </div>
      </aside>
    </div>
  );
};

export default Page;
