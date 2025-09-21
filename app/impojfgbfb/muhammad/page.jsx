import ProphetMuhammad from "./ProphetMuhammad";
import ImportantSection from "@/components/ImportantSection"; // Assuming this is correct
import { ShowPopup } from "@/components/ShowPopup"; // Assuming this is correct

async function fetchWikiData(language = "bn") {
  const wikiBase = language === "bn" ? "bn.wikipedia.org" : "en.wikipedia.org";
  const pageTitle = language === "bn" ? "মুহাম্মাদ" : "Muhammad";

  try {
    const queryResponse = await fetch(
      `https://${wikiBase}/w/api.php?` +
        new URLSearchParams({
          action: "query",
          titles: pageTitle,
          redirects: "true",
          format: "json",
          origin: "*",
        }),
      { next: { revalidate: 3600 } }
    );
    const queryData = await queryResponse.json();
    const page = Object.values(queryData.query.pages)[0];
    const resolvedTitle = page.title || pageTitle;

    const contentResponse = await fetch(
      `https://${wikiBase}/w/api.php?` +
        new URLSearchParams({
          action: "parse",
          page: resolvedTitle,
          format: "json",
          prop: "text|sections",
          origin: "*",
        }),
      { next: { revalidate: 3600 } }
    );

    const contentData = await contentResponse.json();

    return {
      content: contentData?.parse?.text?.["*"] || "",
      sections: contentData?.parse?.sections || [],
    };
  } catch (error) {
    console.error("Failed to fetch Wikipedia data:", error);
    return {
      content: `<p class="text-red-500">Error fetching content. Please try again later.</p>`,
      sections: [],
    };
  }
}

export default async function ProphetPage() {
  const initialData = await fetchWikiData("bn");

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 ">
      <ShowPopup />
        {/* Main Content & Sidebar */}
        <div className="lg:col-span-2">
          <ProphetMuhammad initialData={initialData} />
        </div>

        {/* Right side - Important Section */}
        <div className="lg:col-span-1">
          <ImportantSection />
        </div>
      </div>
    </div>
  );
}