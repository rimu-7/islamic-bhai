import okData from "@/public/story.json";

export function getProphetCategories() {
  return Object.keys(okData.prophets).map((key) => ({
    slug: key, 
    title: okData.prophets[key].title,
    id: okData.prophets[key].id,
  }));
}

export function getProphetBySlug(slug) {
  return okData.prophets[slug] || null;
}

export function getProphetMetadata(slug) {
  const prophet = okData.prophets[slug];
  if (!prophet) return null;
  
  return {
    title: prophet.metadata?.title || `${prophet.title} - ইসলামিক ভাই`,
    description: prophet.metadata?.description || `ইসলামিক ভাই, আপনার একক গন্তব্য ইসলামিক দিকনির্দেশনার জন্য।`
  };
}