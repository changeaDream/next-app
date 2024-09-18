import React from "react";
import Hero from "@/components/hero";
import secondGear from "/public/images/secondGear.jpg";

export default function Page() {
  return <Hero imgUrl={secondGear} altTxt="secondGear" content="Second Gear" />;
}
