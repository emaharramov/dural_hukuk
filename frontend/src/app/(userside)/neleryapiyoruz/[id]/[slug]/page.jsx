"use client"
import { useParams } from "next/navigation";
import React from "react";

const page = () => {

  const { id, slug } = useParams();
  
  return <div>
    {id ? slug : 'id yoxdu'}
  </div>;
};

export default page;
