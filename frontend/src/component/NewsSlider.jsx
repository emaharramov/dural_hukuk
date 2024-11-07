"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";

const NewsSlider = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get("http://localhost:3000/api/posts/");
        setBlogs(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    }
    fetchData();
  }, []);

  console.log(blogs);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {blogs.map((item, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={300 * index}
          className="flex flex-col justify-between w-[90%] mx-auto md:max-w-sm rounded overflow-hidden transition-all duration-300 shadow-none hover:shadow-md bg-white"
        >
          <Image
            width={345}
            height={168}
            src={`http://localhost:3000${item.image}`}
            alt={item.title}
          />
          <div className="px-6 py-4">
            <Link href={`/blog/${item._id}/${item.title}`} passHref>
              <div className="line-clamp-3 font-poppins-medium text-[24px] md:text-[28px] cursor-pointer leading-8 transition-all duration-300 hover:text-[#00419D] hover:underline mb-2">
                {item.title}
              </div>
            </Link>
            <div
              className="text-[#5c5c5c] line-clamp-3 text-[20px] text-base font-poppins"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </div>
          <Link href={`/blog/${item._id}/${item.title}`} passHref>
            <div className="inline-flex flex-col relative group px-6 pb-1 cursor-pointer">
              <div className="inline-flex items-center gap-x-2">
                <span className="underline group-hover:no-underline">
                  DEVAMINI OKU
                </span>
                <MdArrowRightAlt color="#3143dc" size={18} />
              </div>
              <div className="border h-1 bg-[#00419D] absolute bottom-0 left-0 right-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NewsSlider;
