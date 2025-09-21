export async function generateMetadata({ params }) {
  const { slug } = params;

  const metadataMap = {
    morning: {
      title: "সকালের দুয়া ও জিকির - ইসলামিক ভাই",
      description:
        "সকালের সময়কার গুরুত্বপূর্ণ দুয়া ও জিকির। ইসলামিক ভাই এর পক্ষ থেকে।",
    },
    evening: {
      title: "সন্ধ্যার দুয়া ও জিকির - ইসলামিক ভাই",
      description:
        "সন্ধ্যার সময়কার গুরুত্বপূর্ণ দুয়া ও জিকির। ইসলামিক ভাই এর পক্ষ থেকে।",
    },
    sleep: {
      title: "ঘুমের পূর্বের দুয়া ও জিকির - ইসলামিক ভাই",
      description:
        "ঘুমানোর আগে পাঠ করার জন্য বিশেষ দুয়া ও জিকির। ইসলামিক ভাই এর পক্ষ থেকে।",
    },
  };

  return (
    metadataMap[slug] || {
      title: "দুয়া ও জিকির - ইসলামিক ভাই",
      description:
        "ইসলামিক ভাই, আপনার একক গন্তব্য ইসলামিক দিকনির্দেশনার জন্য।",
    }
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en, bn">
      <body>
        {children}
      </body>
    </html>
  );
}