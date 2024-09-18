import React from "react";
import fifthGear from "/public/images/fifthGear.jpg";
import Hero from "@/components/hero";

export default function Page() {
  return <Hero imgUrl={fifthGear} altTxt="fifthGear" content="Fifth Gear" />;
}
