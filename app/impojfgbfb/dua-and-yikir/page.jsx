import Link from "next/link";
import { getZikrCategories } from "./zikr";
import ImportantSection from "../../../components/ImportantSection";

export default function ZikrCategoriesPage() {
  const categories = getZikrCategories();

  return (
    <div className="">
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side (Feelings grid, takes 2/3 space) */}
          <div className="lg:col-span-2">
            <div className="min-h-screen py-8">
              <h1 className="text-3xl font-bold text-center mb-8">
                যিকির শ্রেণীসমূহ
              </h1>

              <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/impojfgbfb/dua-and-yikir/${category.slug}`}
                  >
                    <div className="relative h-48 flex items-center justify-center cursor-pointer overflow-hidden rounded-xl shadow-lg bg-gray-200">
                      <span className="text-black font-semibold text-lg">
                        {category.title}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
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
