"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const yorumlar = [
  {
    isim: "Ayşe K.",
    yorum:
      "Hizmet kalitesi ve ilgiden çok memnun kaldım. Her soruma sabırla cevap verdiler.",
  },
  {
    isim: "Murat B.",
    yorum:
      "Davamızı çok profesyonel bir şekilde yönettiler ve süreci her aşamada bize detaylı bir şekilde açıkladılar.",
  },
  {
    isim: "Selin M.",
    yorum:
      "Adalet Danışmanlık sayesinde hukuki sürecim sorunsuz bir şekilde sonuçlandı. Tavsiye ederim.",
  },
  {
    isim: "Okan T.",
    yorum:
      "Avukatlar çok bilgili ve işlerini ciddiye alıyorlar. Gönül rahatlığıyla tercih edebilirsiniz.",
  },
  {
    isim: "Leyla C.",
    yorum:
      "Her zaman ulaşılabilirler ve her adımda bilgilendirme yapıyorlar. İşini iyi yapan bir ekip.",
  },
];

const GoogleComments = () => {
  return (
    <div className="bg-[#F8F8F8] py-20" data-aos="fade-up" data-aos-delay={300}>
      <div className="container mx-auto w-[90%] md:w-initial">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-[240px]"
        >
          {yorumlar?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col">
                <h5 className="text-[#222] text-center text-[20px] font-poppins-semibold mb-[23px]">
                  {item.isim}
                </h5>
                <p className="text-[24px] mb-20 md:w-[736px] mx-auto text-center font-poppins leading-9">
                  {item.yorum}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GoogleComments;
