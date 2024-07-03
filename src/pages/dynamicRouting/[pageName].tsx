import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function PageName() {
  const route = useRouter();
  const query: { pageName: string } = route.query as { pageName: string };
  console.log(query.pageName, route.query);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 style={{ color: query.pageName }}>
        Hello, This is {query.pageName}!
      </h1>
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </main>
  );
}
