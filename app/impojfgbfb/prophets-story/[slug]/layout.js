import { ShowPopup } from "@/components/ShowPopup";
import { getProphetBySlug, getProphetMetadata } from "../prophet";
import ProphetClient from "./\bProphetClient";
import ImportantSection from "@/components/ImportantSection";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const metadata = getProphetMetadata(slug);
  
  return metadata || {
    title: "নবীদের জীবনী - ইসলামিক ভাই",
    description: "ইসলামিক ভাই, আপনার একক গন্তব্য ইসলামিক দিকনির্দেশনার জন্য।"
  };
}

// Rest of your ProphetPage component remains the same
export default function ProphetPage({ params }) {
  const { slug } = params;
  const prophetData = getProphetBySlug(slug);

  if (!prophetData) {
    return (
      <p className="text-center py-10">
        কোনো তথ্য পাওয়া যায়নি। (No data found)
      </p>
    );
  }

  return (
    <div className="">
      <ShowPopup/>
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side (Feelings grid, takes 2/3 space) */}
          <div className="lg:col-span-2">
            <ProphetClient prophetData={prophetData} />
          </div>

          {/* Right side (ImportantSection, takes 1/3 space) */}
          <div>
            <ImportantSection />
          </div>
        </div>
      </div>
    </div>
  );
}