import okData from "../../../data/ok.json";

export function getZikrCategories() {
  return Object.keys(okData.zikr).map((key) => ({
    slug: key, // e.g. "morning", "evening", "beforeBed"
    title: okData.zikr[key].title,
    id: okData.zikr[key].id, // ensure id comes from JSON
  }));
}

export function getZikrBySlug(slug) {
  return okData.zikr[slug] || null;
}
