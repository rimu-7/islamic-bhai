export async function generateMetadata({ params }) {
  const { slug } = params;
  const data = {
    feeling: [
      { path: "/feeling/confident", title: "Feeling Confident" }
    ]
  };
  const feeling = data.feeling.find((f) => f.path === `/feeling/${slug}`);

  if (!feeling) {
    return {
      title: "Feeling Not Found | ইসলামিক ভাই",
      description: "The requested feeling page was not found.",
    };
  }

  return {
    title: `${feeling.title} | ইসলামিক ভাই`,
    description: `${feeling.title} - Find Islamic supplications and guidance for this feeling. Welcome to Islamic Bhai, your one-stop destination for all things Islamic.`,
  };
}

export default function Layout({ children }) {
  return <>{children}</>;
}
