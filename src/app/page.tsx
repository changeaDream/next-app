import React from "react";
import fifthGear from "/public/images/fifthGear.jpg";
import Hero from "@/components/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fifth Gear",
};

export default function Page() {
  return <Hero imgUrl={fifthGear} altTxt="fifthGear" content="Fifth Gear" />;
}
