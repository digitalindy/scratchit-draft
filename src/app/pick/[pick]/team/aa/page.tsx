"use client";

import React, {use, useEffect, useRef, useState} from 'react';
import ScratchCard from 'react-scratchcard-v4';
import Image from "next/image";
import {Metadata} from "next";

export default function Home(props: { params: Promise<{ pick: string }> }) {

    const params = use(props.params)
    const [pick, setPick] = useState("")
    const [name, setName] = useState("")

    useEffect(() => {
        setPick(params.pick)
        document.title = `CHAMPIONS LEAGUE Draft Pick #${params.pick}`
    }, [props.params])

    return (
        <div className={"flex-col w-full h-screen items-center justify-center over"}>
            <h1 className={"font-bold text-3xl m-3 text-center"}>CHAMPIONS LEAGUE Draft Pick #{pick}</h1>
            <div className={"flex items-center justify-center overflow-hidden"}>
                <ScratchCard
                    width={1024}
                    height={683}
                    image={"https://statico.profootballnetwork.com/wp-content/uploads/2021/02/15211332/nfl-logo-shield-history-design-meaning.jpg"}
                    finishPercent={70}
                    onComplete={() => {
                        setName("Dumpster Fire")
                    }}
                >
<div className={"relative flex items-center justify-center overflow-hidden text-center w-full h-full bg-[url('/aa.png')] bg-center bg-no-repeat bg-contain"}>
    <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
        {name && <img width={40} height={40} src={"/aalogo.png"} className={"mr-2"}/>}
        {name}
    </h1>
</div>
                </ScratchCard>
            </div>
        </div>
    );
};