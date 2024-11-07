"use client";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

// AOS component setup
export const AosComponent = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return null; // No visual component returned
};
