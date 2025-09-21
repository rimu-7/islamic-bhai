export default function Sidebar({
  sections,
  language,
  isLoading,
  error,
  isSidebarOpen,
  setIsSidebarOpen,
}) {
  const scrollToSection = (anchor) => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      }
    }
  };

  return (
    <>
      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div
        className={`sidebar-container fixed md:static inset-y-0 left-0 z-40 w-64 bg-white p-4 rounded-lg shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out md:sticky md:top-4 md:self-start`}
      >
        <div className="h-full">
          <h2 className="text-xl font-semibold mb-4">
            {language === "bn" ? "বিষয়সূচি" : "Table of Contents"}
          </h2>
          <div className="h-[calc(100vh-150px)] md:h-[70vh] overflow-y-auto">
            {isLoading ? (
              <div className="space-y-2">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-6 bg-gray-200 animate-pulse rounded w-full"
                  />
                ))}
              </div>
            ) : error ? (
              <p className="text-red-600">
                {language === "bn" ? `ত্রুটি: ${error}` : `Error: ${error}`}
              </p>
            ) : (
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.anchor}>
                    <button
                      onClick={() => scrollToSection(section.anchor)}
                      className="text-blue-600 hover:text-blue-800 hover:underline text-left w-full py-1 px-2 rounded hover:bg-gray-100 transition-colors"
                    >
                      {section.line}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
