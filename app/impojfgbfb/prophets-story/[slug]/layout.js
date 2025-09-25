import { getProphetMetadata } from "../prophet";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const metadata = getProphetMetadata(slug);

  return (
    metadata || {
      title: "নবীদের জীবনী - ইসলামিক ভাই",
      description: "ইসলামিক ভাই, আপনার একক গন্তব্য ইসলামিক দিকনির্দেশনার জন্য।",
    }
  );
}

export default function ProphetLayout({ children }) {
  return <>{children}</>;
}
