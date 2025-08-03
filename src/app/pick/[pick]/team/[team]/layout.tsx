import type { Metadata } from "next";

type Props = {
  params: Promise<{ pick: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pick } = await params;
  const title = `🏆 CHAMPIONS LEAGUE Draft Pick #${pick}`;
  
  return {
    title,
    openGraph: {
      title,
      description: `Scratch to reveal the Champions League #${pick} draft pick!`,
      images: [
        {
          url: "/nfl.png",
          width: 1024,
          height: 683,
          alt: title,
        },
      ],
    }
  };
}

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}