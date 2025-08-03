"use client";

import React, { useEffect, useState } from 'react';
import ScratchCard from 'react-scratchcard-v4';
import Image from 'next/image';

interface ScratchCardClientProps {
  pick: string;
}

export default function ScratchCardClient({ pick }: ScratchCardClientProps) {
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `🏆 CHAMPIONS LEAGUE Draft Pick #${pick}`;
  }, [pick]);

  return (
    <div className={"flex-col w-full h-screen items-center justify-center over"}>
      <h1 className={"font-bold text-3xl m-3 text-center"}>🏆 CHAMPIONS LEAGUE Draft Pick #{pick}</h1>
      <div className={"flex items-center justify-center overflow-hidden"}>
        <ScratchCard
          width={Math.min(typeof window !== 'undefined' ? window.innerWidth : 1024, 1024)}
          height={Math.min(typeof window !== 'undefined' ? window.innerWidth : 1024, 1024) * (683 / 1024)}
          image={"https://statico.profootballnetwork.com/wp-content/uploads/2021/02/15211332/nfl-logo-shield-history-design-meaning.jpg"}
          finishPercent={70}
          onComplete={() => {
            setName("Dumpster Fire");
          }}
        >
          <div className={"relative flex items-center justify-center overflow-hidden text-center w-full h-full bg-[url('/aa.png')] bg-center bg-no-repeat bg-contain"}>
            <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
              {name && <Image width={40} height={40} src={"/aalogo.png"} alt="AA Logo" className={"mr-2"} />}
              {name}
            </h1>
          </div>
        </ScratchCard>
      </div>
    </div>
  );
}