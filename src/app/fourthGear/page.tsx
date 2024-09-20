import React from "react";
import Hero from "@/components/hero";
import fourthGear from "/public/images/fourthGear.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fourth Gear",
};

export default function Page() {
  return <Hero imgUrl={fourthGear} altTxt="fourthGear" content="Fourth Gear" />;
}
