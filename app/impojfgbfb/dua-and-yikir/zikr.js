import okData from "../../../data/ok.json";

export function getZikrCategories() {
  return Object.keys(okData.zikr).map((key) => ({
    slug: key, 
    title: okData.zikr[key].title,
    id: okData.zikr[key].id,
  }));
}

export function getZikrBySlug(slug) {
  return okData.zikr[slug] || null;
}
