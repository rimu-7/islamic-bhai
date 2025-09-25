export async function generateMetadata({ params }) {
  const { slug } = await params;
  const bookName = slug.replace(/-/g, " ");

  return {
    title: `${bookName} - Hadith Chapters`,
    description: `Explore chapters from ${bookName} - Authentic Islamic hadith collection`,
    keywords: "hadith, islamic, sunnah, prophet, chapters, islamic books",
    authors: [{ name: "Islamic Resource" }],
    openGraph: {
      title: `${bookName} - Hadith Chapters`,
      description: `Explore chapters from ${bookName}`,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${bookName} - Hadith Chapters`,
      description: `Explore chapters from ${bookName}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function BookLayout({ children, params }) {
  const { slug } = await params;
  const bookName = slug.replace(/-/g, " ");

  return (
    <div>
      <h1 className="text-2xl font-bold capitalize">{bookName}</h1>
      {children}
    </div>
  );
}
