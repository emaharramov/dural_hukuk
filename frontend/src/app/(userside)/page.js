import React from "react";
import GoogleComments from "@/component/GoogleComments";
import NelerYapiyoruz from "./neleryapiyoruz/NelerYapiyoruz";
import Partners from "@/component/Partners";
import News from "@/component/News";

export default async function Home() {

  return (
    <div>
      <GoogleComments />
      <NelerYapiyoruz />
      <Partners />
      <News />
    </div>
  );
}
