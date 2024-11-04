import React from 'react';
import Services from '../neleryapiyoruz/Services';
import GoogleComments from '@/component/GoogleComments';

const page = () => {
  return (
    <div>
      <div className="py-20">
        <Services />
      </div>
      <GoogleComments />
    </div>
  );
};

export default page;