import React, { Suspense } from "react";
import Image from "next/image";
import Text from "@/components/text";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function Home() {
  return (
    <div className="flex flex-col vignette items-center justify-center max-h-screen relative min-h-screen min-w-screen font-[family-name:var(--yuji)] bg-gradient-to-r from-[#0f172a]  to-[#334155] text-xl text-glow gap-10 overflow-hidden">
      <Text />
      <div className="absolute mix-blend-overlay h-full w-full brightness-200">
        <Suspense
          fallback={<div className="absolute w-full h-full bg-black" />}
        >
          <Spline scene="https://prod.spline.design/Lu8hG1Zz1tHNkaon/scene.splinecode" />
        </Suspense>
      </div>

      <div className="w-full h-[20%] absolute top-0 bg-gradient-to-b from-black to-transparent" />
      <div className="w-full h-[20%] absolute bottom-0 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}
