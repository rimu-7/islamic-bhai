// app/impojfgbfb/hadiths/[slug]/[chapter]/[id]/layout.js
export async function generateMetadata({ params }) {
  const { slug, chapter, id } = params;
  const bookName = slug.replace(/-/g, " ");
  const formattedBookName = bookName
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `Hadith #${id} - Chapter ${chapter} - ${formattedBookName} | Islamic Resource`,
    description: `Read Hadith #${id} from Chapter ${chapter} of ${formattedBookName}. Authentic Islamic tradition with English translation and Arabic text.`,
    keywords: `hadith, ${formattedBookName}, chapter ${chapter}, hadith ${id}, islamic, sunnah, prophet muhammad`,
    authors: [{ name: "Islamic Resource" }],
    openGraph: {
      title: `Hadith #${id} - Chapter ${chapter} - ${formattedBookName}`,
      description: `Read Hadith #${id} from Chapter ${chapter} of ${formattedBookName}`,
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `Hadith #${id} - Chapter ${chapter} - ${formattedBookName}`,
      description: `Read Hadith #${id} from Chapter ${chapter} of ${formattedBookName}`,
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
      canonical: `https://yourdomain.com/impojfgbfb/hadiths/${slug}/${chapter}/${id}`,
    },
  };
}

export default function HadithLayout({ children }) {
  return (
    <div className="hadith-layout">
      {children}
    </div>
  );
}