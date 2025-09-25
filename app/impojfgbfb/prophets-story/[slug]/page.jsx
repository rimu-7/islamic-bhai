// import { ShowPopup } from "@/components/ShowPopup";
import { getProphetBySlug } from "../prophet";
import ImportantSection from "@/components/ImportantSection";
import ProphetClient from "./ProphetClient";

export default async function ProphetPage({ params }) {
  const { slug } = await params;
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
      {/* <ShowPopup /> */}
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side */}
          <div className="lg:col-span-2">
            <ProphetClient prophetData={prophetData} />
          </div>

          {/* Right side */}
          <div>
            <ImportantSection />
          </div>
        </div>
      </div>
    </div>
  );
}
