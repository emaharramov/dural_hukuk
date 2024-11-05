// import axios from "axios";
// import Link from "next/link";

import GoogleComments from "@/component/GoogleComments";
import NelerYapiyoruz from "./neleryapiyoruz/NelerYapiyoruz";
import Partners from "@/component/Partners";
import News from "@/component/News";

// const getData = async () => {
//   try {
//     const res = await axios.get('http://localhost:3000/api/posts');
//     return res.data;
//   } catch (err) {
//     console.error(err);
//   }
// };

// export async function generateMetadata() {
//   const data = await getData()
//   return {
//     title: data[0].title
//   }
// }

export default async function Home() {
  // const data = await getData()

  return (
    <div>
      <GoogleComments />
      <NelerYapiyoruz />
      <Partners />
      <News />
    </div>
  );
}
