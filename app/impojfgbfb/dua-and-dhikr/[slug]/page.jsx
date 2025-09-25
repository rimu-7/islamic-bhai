import { getZikrBySlug } from "../zikr";
import ZikrClient from "./ZikrClient";
import ImportantSection from "@/components/ImportantSection";

export default async function ZikrPage({ params }) {
  const { slug } = await params;
  const zikrData = getZikrBySlug(slug);

  if (!zikrData) {
    return (
      <p className="text-center py-10">
        কোনো তথ্য পাওয়া যায়নি। (No data found)
      </p>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left side (Zikr content, takes 2/3 space) */}
        <div className="lg:col-span-2">
          <ZikrClient zikrData={zikrData} />
        </div>

        {/* Right side (ImportantSection, takes 1/3 space) */}
        <div>
          <ImportantSection />
        </div>
      </div>
    </div>
  );
}
