import Link from "next/link";
import { getZikrCategories } from "./zikr";
import ImportantSection from "@/components/ImportantSection";
import { ShowPopup } from "@/components/ShowPopup";
import SocialMedia from "@/components/SocialMedia";


export default function ZikrCategoriesPage() {
  const categories = getZikrCategories();

  // Gradient styles for category boxes
  const gradients = [
    {
      background:
        "radial-gradient(125% 125% at 1% 100%, #000000 4%, #354500 100%)",
    },
    {
      background:
        "radial-gradient(125% 125% at 1% 100%, #000000 4%, #0d1a93 100%)",
    },
    {
      background:
        "radial-gradient(125% 125% at 50% 10%, #000000 40%, #451a90 100%)",
    },
    {
      background:
        "radial-gradient(125% 125% at 50% 100%, #1a0d36 40%, #670101 100%)",
    },
    {
      background:
        "radial-gradient(125% 125% at 50% 90%, #000000 40%, #019045 100%)",
    },
    {
      background:
        "radial-gradient(125% 125% at 50% 80%, #000000 40%, #560567 100%)",
    },
  ];

  return (
    <div className="">
      <ShowPopup/>
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side (Categories grid, 2/3 space) */}
          <div className="lg:col-span-2">
            <div className="min-h-screen py-8">
              <h1 className="bg-gradient-to-l from-emerald-600 to-green-400 text-transparent bg-clip-text p-4 text-5xl font-bold text-center mb-8">
                যিকির শ্রেণীসমূহ
              </h1>

              <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                  <Link
                    key={category.slug}
                    href={`/impojfgbfb/dua-and-dhikr/${category.slug}`}
                  >
                    <div
                      className="group relative h-48 flex items-center justify-center cursor-pointer transform transition-transform duration-200 hover:scale-100 overflow-hidden rounded-xl shadow-lg"
                      style={gradients[index % gradients.length]}
                    >
                      <span className="text-white font-semibold text-lg text-center px-2 transform transition-transform duration-200 group-hover:scale-125">
                        {category.title}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <SocialMedia/>
          </div>

          {/* Right side (ImportantSection, 1/3 space) */}
          <div>
            <ImportantSection />
          </div>
        </div>
      </div>
      
    </div>
  );
}
