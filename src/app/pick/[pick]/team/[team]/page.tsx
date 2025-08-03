"use client";

import React, {use, useEffect, useState} from 'react';
import ScratchCard from 'react-scratchcard-v4';
import teams from "./teams.json"

export default function Home(props: { params: Promise<{ pick: string, team: string }> }) {

    const params = use(props.params)
    const [pick, setPick] = useState("")
    const [team, setTeam] = useState("")
    const [name, setName] = useState("")

    useEffect(() => {
        const name = (teams as Record<string, string>)[params.team]
        setPick(params.pick)
        setTeam(name)
        document.title = `🏆 CHAMPIONS LEAGUE Draft Pick #${params.pick}`
    }, [params.pick, params.team])

    // if window is not defined, return empty div
    if (typeof window === "undefined") {
        return <div className="w-full h-screen flex items-center justify-center">Loading...</div>;
    }

    return (
        <div className={"flex-col w-full h-screen items-center justify-center over"}>
            <h1 className={"font-bold text-3xl m-3 text-center"}>🏆 CHAMPIONS LEAGUE Draft Pick #{pick}</h1>
            <div className={"flex items-center justify-center overflow-hidden"}>
<ScratchCard
    width={Math.min(window.innerWidth, 1024)}
    height={Math.min(window.innerWidth, 1024) * (683 / 1024)}
    image={"https://statico.profootballnetwork.com/wp-content/uploads/2021/02/15211332/nfl-logo-shield-history-design-meaning.jpg"}
    finishPercent={70}
    brushSize={10}
    onComplete={() => {
        setName(team)
    }}
>
<div className={"relative flex items-center justify-center overflow-hidden text-center w-full h-full bg-[url('/aa.png')] bg-center bg-no-repeat bg-contain"}>
    <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
        {name && <img width={40} height={40} src={`/${params.team}-logo.png`} className={"mr-2"}/>}
        {name}
    </h1>
</div>
                </ScratchCard>
            </div>
        </div>
    );
};