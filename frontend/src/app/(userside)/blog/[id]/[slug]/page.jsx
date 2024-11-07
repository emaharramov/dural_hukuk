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
  const [blogs, setBlogs] = useState([]);

  // Bloglar listesini çekmek için useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/posts/");
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Seçilen article bilgisini çekmek için useEffect
  useEffect(() => {
    if (id) {
      setLoading(true);
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
  }, [id]); // id değiştiğinde bu useEffect tetiklenir

  if (loading) {
    return (
      <div className="py-20 flex items-center justify-center">
        <PuffLoader color="#36D7B7" size={60} />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="py-20 flex items-center justify-center">
        <PuffLoader color="#36D7B7" size={60} />
      </div>
    );
  }

  return (
    <div className="container mx-auto flex justify-between w-full py-20">
      <div className="rounded-xl overflow-hidden w-[96%] mx-auto md:w-2/3 md:mr-[15px]">
        <div className="relative w-full h-[50vh] lg:h-[487px]">
          <Image
            src={`http://localhost:3000${article.image}`}
            alt={article.title}
            fill
            className="object-cover rounded-xl"
            unoptimized
          />
        </div>
        <h2 className="text-[28px] md:text-[36px] md:leading-[44px] font-poppins-medium my-7">
          {article.title}
        </h2>
        <div
          dangerouslySetInnerHTML={{ __html: article.content }}
          className="prose max-w-none"
        />
      </div>
      <aside className="border rounded-md w-[350px] h-fit ms-[15px] hidden md:block px-9 pt-10 pb-4 bg-[#f9f9f9]">
        <p className="text-[22px] leading-8 border-b-2 border-[#f3f4f6] pb-5 mb-4 font-poppins-medium text-[#051133]">
          Tüm Yazılar
        </p>
        {blogs.map((item, index) => (
          <Link href={`/blog/${item._id}/${item.title}`} key={index} passHref>
            <div className="flex items-center justify-between gap-x-2 h-[80px] mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded">
              <Image
                src={`http://localhost:3000${item.image}`}
                width={95}
                height={80}
                alt={item.title}
                className="h-full object-cover"
                unoptimized
              />
              <p className="text-[#051133] font-poppins-semibold text-[14px] line-clamp-4 hover:text-[#00419D] transition-all duration-300 leading-5">
                {item.title}
              </p>
            </div>
          </Link>
        ))}
      </aside>
    </div>
  );
};

export default Page;
