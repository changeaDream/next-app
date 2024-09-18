"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const linkData = [
  { name: "SecondGear", href: "/secondGear" },
  { name: "ThirdGear", href: "/thirdGear" },
  { name: "FourthGear", href: "/fourthGear" },
];
export default function Header() {
  const pathname = usePathname();
  return (
    <div className="absolute inset-0 z-10">
      <div className="flex justify-between container mx-auto text-white p-8 items-center">
        <Link className="text-3xl font-bold" href="/">
          Home
        </Link>
        <div className="text-xl space-x-4">
          {linkData.map((link) => {
            return (
              <Link
                key={link.name}
                className={pathname === link.href ? "text-red-500" : ""}
                href={link.href}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
