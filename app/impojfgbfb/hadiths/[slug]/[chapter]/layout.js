// app/impojfgbfb/hadiths/[slug]/[chapter]/layout.js
export async function generateMetadata({ params }) {
  const { slug, chapter } = params;
  const bookName = slug.replace(/-/g, " ");
  const formattedBookName = bookName
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `Chapter ${chapter} - ${formattedBookName} | Islamic Resource`,
    description: `Read authentic hadiths from Chapter ${chapter} of ${formattedBookName}. Explore Islamic traditions and teachings.`,
    keywords: `hadith, ${formattedBookName}, chapter ${chapter}, islamic, sunnah, prophet muhammad`,
    authors: [{ name: "Islamic Resource" }],
    openGraph: {
      title: `Chapter ${chapter} - ${formattedBookName}`,
      description: `Read authentic hadiths from Chapter ${chapter} of ${formattedBookName}`,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `Chapter ${chapter} - ${formattedBookName}`,
      description: `Read authentic hadiths from Chapter ${chapter} of ${formattedBookName}`,
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
    alternates: {
      canonical: `https://yourdomain.com/impojfgbfb/hadiths/${slug}/${chapter}`,
    },
  };
}

export default function ChapterLayout({ children }) {
  return (
    <div className="chapter-layout">
      {children}
    </div>
  );
}