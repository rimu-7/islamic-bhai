export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ await params
  const data = {
    feeling: [
      { path: "/feeling/confident", title: "Feeling Confident" }
    ]
  };

  const feeling = data.feeling.find((f) => f.path === `/feeling/${slug}`);
  if (!feeling) {
    return { title: "Feeling not found" };
  }

  return {
    title: feeling.title,
    description: `Explore supplications and guidance for "${feeling.title}".`,
  };
}


export default function Layout({ children }) {
  return <>{children}</>;
}
