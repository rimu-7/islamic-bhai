import Link from "next/link";
import { getProphetCategories } from "./prophet";
import ImportantSection from "@/components/ImportantSection";
import { ShowPopup } from "@/components/ShowPopup";
import SocialMedia from "@/components/SocialMedia";

export default function ZikrCategoriesPage() {
  const categories = getProphetCategories();

  // Gradient styles for category boxes
  const gradients = [
    {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      background: "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      background: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
    },
    {
      background: "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
    },
    {
      background: "radial-gradient(circle at center, #ff9a9e 0%, #fad0c4 100%)",
    },
    {
      background:
        "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
    },
    {
      background: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
    },
    {
      background: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
    },
    {
      background: "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)",
    },
    {
      background: "linear-gradient(to top, #5ee7df 0%, #b490ca 100%)",
    },
    {
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    },
    {
      background: "linear-gradient(to right, #6a11cb 0%, #2575fc 100%)",
    },
    {
      background:
        "radial-gradient(circle farthest-corner at 10% 20%, rgba(255, 209, 67, 1) 0%, rgba(255, 145, 83, 1) 90%)",
    },
    {
      background:
        "linear-gradient(109.6deg, rgba(61, 131, 97, 1) 11.2%, rgba(28, 103, 88, 1) 91.1%)",
    },
    {
      background:
        "linear-gradient(109.6deg, rgba(61, 121, 176, 1) 11.2%, rgba(91, 156, 234, 1) 91.2%)",
    },
    {
      background:
        "linear-gradient(110.3deg, rgba(72, 85, 99, 1) 8.8%, rgba(127, 146, 166, 1) 95.1%)",
    },
    {
      background:
        "linear-gradient(110.1deg, rgba(238, 138, 75, 1) 14.3%, rgba(239, 100, 47, 1) 68.7%)",
    },
    {
      background:
        "linear-gradient(109.6deg, rgba(247, 151, 30, 1) 11.2%, rgba(255, 210, 111, 1) 91.1%)",
    },
    {
      background:
        "radial-gradient(circle at 10% 20%, rgba(222, 152, 65, 1) 0%, rgba(199, 108, 40, 1) 90%)",
    },
    {
      background:
        "linear-gradient(112.1deg, rgba(32, 38, 57, 1) 11.4%, rgba(63, 76, 119, 1) 70.2%)",
    },
  ];

  return (
    <div className="">
      <ShowPopup />
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side (Categories grid, 2/3 space) */}
          <div className="lg:col-span-2">
            <div className="min-h-screen py-8">
              <h2 className="text-3xl md:text-5xl text-center bg-gradient-to-r from-purple-500 via-teal-500 to-red-500 text-transparent bg-clip-text p-2 font-bold mb-4">
                নবীদের জীবনী
              </h2>
              <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                  <Link
                    key={category.slug}
                    href={`/impojfgbfb/prophets-story/${category.slug}`}
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
            <SocialMedia />
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
