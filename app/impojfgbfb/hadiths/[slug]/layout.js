// app/impojfgbfb/hadiths/[slug]/layout.js
export const metadata = {
  title: "Hadith Chapters - Islamic Resource",
  description: "Explore chapters of Islamic hadith collections with detailed information and authentic traditions.",
  keywords: "hadith, islamic, sunnah, prophet, chapters, islamic books",
  authors: [{ name: "Islamic Resource" }],
  openGraph: {
    title: "Hadith Chapters - Islamic Resource",
    description: "Explore chapters of Islamic hadith collections",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hadith Chapters - Islamic Resource",
    description: "Explore chapters of Islamic hadith collections",
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

export default function BookLayout({ children, params }) {
  const { slug } = params;
  const bookName = slug.replace(/-/g, " ");

  // Update metadata based on the specific book
  metadata.title = `${bookName} - Hadith Chapters`;
  metadata.description = `Explore chapters from ${bookName} - Authentic Islamic hadith collection`;
  metadata.openGraph.title = `${bookName} - Hadith Chapters`;
  metadata.openGraph.description = `Explore chapters from ${bookName}`;
  metadata.twitter.title = `${bookName} - Hadith Chapters`;
  metadata.twitter.description = `Explore chapters from ${bookName}`;

  return (
    <div>
      {children}
    </div>
  );
}