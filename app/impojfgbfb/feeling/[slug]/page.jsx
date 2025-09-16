// app/feeling/[slug]/page.js
import fs from "fs/promises";
import path from "path";
import data from "../../../../data/ok.json";
import FeelingClient from "./FeelingClient";

export async function generateMetadata({ params }) {
  const { slug } = params;
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

export default async function FeelingPage({ params }) {
  const { slug } = params;

  const filePath = path.join(process.cwd(), "data", "ok.json");
  const fileData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(fileData);

  const feeling = data.feeling.find((f) => f.path === `/feeling/${slug}`);
  const supplication = data.supplications?.[slug] || null;

  return (
    <FeelingClient
      slug={slug}
      feelingData={feeling || null}
      supplicationData={supplication}
    />
  );
}