import React from 'react';
import ScratchCardClient from './ScratchCardClient';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ pick: string }> }): Promise<Metadata> {
  const { pick } = await params;
  const title = `🏆 CHAMPIONS LEAGUE Draft Pick #${pick}`;
  
  return {
    title,
    description: "Scratch to reveal your Champions League draft pick!",
    openGraph: {
      title,
      description: "Scratch to reveal your Champions League draft pick!",
      type: "website",
      siteName: "Champions League Draft",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: "Scratch to reveal your Champions League draft pick!",
    },
  };
}

export default async function Home(props: { params: Promise<{ pick: string }> }) {
    const params = await props.params;

    return <ScratchCardClient pick={params.pick} />;
};