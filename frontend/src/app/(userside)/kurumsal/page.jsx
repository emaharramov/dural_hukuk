import React from "react";
import Services from "../neleryapiyoruz/Services";
import GoogleComments from "@/component/GoogleComments";

const Page = () => {
  return (
    <div>
      <div className="py-20">
        <Services />
      </div>
      <GoogleComments />
    </div>
  );
};

export default Page;
