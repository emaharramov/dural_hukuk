import React from 'react';
import NewsSlider from './NewsSlider';

const News = () => {
  return (
    <div>
      <div
        className="container mx-auto py-20 flex flex-col items-center"
        data-aos="fade-in"
        data-aos-delay={300}
      >
        <p className="text-center text-[32px] md:text-[50px] font-poppins-medium leading-[58px] mb-[50px] text-[#263238]">
          Makaleler ve Haberler
        </p>
        <div>
          <NewsSlider />
        </div>
      </div>
    </div>
  );
};

export default News;