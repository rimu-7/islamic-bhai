import data from "@/public/ok.json";

export async function generateStaticParams() {
  return data.feeling.map((feeling) => ({
    slug: feeling.id,
  }));
}