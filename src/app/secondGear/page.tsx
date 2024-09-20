import React from "react";
import Hero from "@/components/hero";
import secondGear from "/public/images/secondGear.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Second Gear",
};
export default function Page() {
  return <Hero imgUrl={secondGear} altTxt="secondGear" content="Second Gear" />;
}
