import type { Metadata } from "next";

type Props = {
  params: Promise<{ pick: string; team: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pick, team } = await params;
  const title = `🏆 CHAMPIONS LEAGUE Draft Pick #${pick}`;
  const description = `Scratch to reveal the Champions League #${pick} draft pick!`;
  const imageUrl = `${process.env.NEXT_PUBLIC_APP_URL || 'https://champions-draft.vercel.app'}/nfl.png`;
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://champions-draft.vercel.app'}/pick/${pick}/team/${team}`,
      siteName: 'Champions League Draft',
      images: [
        {
          url: imageUrl,
          width: 1024,
          height: 683,
          alt: title,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}