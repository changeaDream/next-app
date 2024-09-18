import React from "react";
import Hero from "@/components/hero";
import thirdGear from "/public/images/thirdGear.jpg";

export default function Page() {
  return <Hero imgUrl={thirdGear} altTxt="thirdGear" content="Third Gear" />;
}
