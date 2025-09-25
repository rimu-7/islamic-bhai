import ProphetMuhammad from "./ProphetMuhammad";
import ImportantSection from "@/components/ImportantSection";
// import { ShowPopup } from "@/components/ShowPopup";

async function fetchWikiData(language = "bn") {
  const wikiBase = language === "bn" ? "bn.wikipedia.org" : "en.wikipedia.org";
  const pageTitle = language === "bn" ? "মুহাম্মাদ" : "Muhammad";

  try {
    // Step 1: Fetch page title with redirects
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
    if (!queryResponse.ok) {
      throw new Error(`Query failed: ${queryResponse.status}`);
    }
    const queryData = await queryResponse.json();
    const page = Object.values(queryData.query.pages)[0];
    const resolvedTitle = page.title || pageTitle;

    // Step 2: Fetch only necessary sections or mobile content
    const contentResponse = await fetch(
      `https://${wikiBase}/w/api.php?` +
        new URLSearchParams({
          action: "parse",
          page: resolvedTitle,
          format: "json",
          prop: "text|sections",
          mobileformat: "true", 
          section: "0",
          origin: "*",
        }),
      { next: { revalidate: 3600 } }
    );
    if (!contentResponse.ok) {
      throw new Error(`Content fetch failed: ${contentResponse.status}`);
    }
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* <ShowPopup /> */}
        {/* Main Content */}
        <div className="lg:col-span-2">
          <ProphetMuhammad initialData={initialData} />
        </div>
        {/* Right Sidebar */}
        <div className="lg:col-span-1">
          <ImportantSection />
        </div>
      </div>
    </div>
  );
}

export const revalidate = 3600;